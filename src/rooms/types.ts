import { Context } from '../events/types';
import { GameState } from '../game/game.state';
import type { User } from '../users/types';
import { writePayload } from '../protobuf/writePayload';
import { config } from '../config/config';
import { GameEvents } from '../game/game.events';
import { PACKET_TYPE } from '../constants/packetType';
import {
  AnimationType,
  CardType,
  RoomStateType,
  S2CAnimationNotification,
  S2CPositionUpdateNotification,
  S2CUserUpdateNotification,
  S2CWarningNotification,
  WarningType,
} from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { pickRandomCardType } from '../cards/utils/helpers';

export enum RoomState {
  WAIT = 0,
  PREPARE = 1,
  IN_GAME = 2,
}

export type BombState = {
  userId: string;
  expectedAt: number;
  isWarningSend: boolean;
};

export class Room {
  name: string;
  ownerId: string;
  maxUserNum: number;
  users: User[];
  state: RoomStateType;
  gameState: GameState;
  gameEvents: GameEvents;
  fleaMarketCards: number[];
  pickFleaMarketIndex: number[];
  bombStates: BombState[];
  infomationBroadcastTimer: NodeJS.Timeout | null;

  constructor({
    name,
    ownerId,
    maxUserNum,
    users,
    state,
    gameState,
    gameEvents,
  }: {
    name: string;
    ownerId: string;
    maxUserNum: number;
    users: User[];
    state: RoomStateType;
    gameState: GameState;
    gameEvents: GameEvents;
  }) {
    this.name = name;
    this.ownerId = ownerId;
    this.maxUserNum = maxUserNum;
    this.users = users;
    this.state = state;
    this.gameState = gameState;
    this.gameEvents = gameEvents;
    this.fleaMarketCards = [];
    this.pickFleaMarketIndex = [];
    this.bombStates = [];
    this.infomationBroadcastTimer = null;
  }

  broadcast(packetType: number, payload: any) {
    this.users.forEach((user) => {
      writePayload(user.socket, packetType, config.client.version, 0, payload);
    });
  }

  toRoomData(roomId) {
    return {
      id: roomId,
      name: this.name,
      ownerId: this.ownerId,
      maxUserNum: this.maxUserNum,
      state: this.state,
      users: this.users.map((user) => user.toUserData(user.id)),
    };
  }

  getUser(userId: string) {
    return this.users.find((user) => user.id === userId) ?? null;
  }

  setTimer() {
    this.gameState.gameStart();
    this.startInformationBroadcastTimer();
  }

  resetTimer() {
    this.gameState.resetTimer();
    this.stopPositionBroadcast();
    for (const user of this.users) {
      user.character.stateInfo.resetTimer();
    }
  }

  initFleaMarketCards() {
    this.fleaMarketCards = [];
    this.pickFleaMarketIndex = [];
    for (let i = 0; i < this.users.length; i++) {
      const randomCardType = pickRandomCardType();
      this.fleaMarketCards.push(randomCardType);
    }
  }

  startInformationBroadcastTimer() {
    this.infomationBroadcastTimer = setInterval(() => {
      const now = Date.now();

      // 폭탄 경고 대상
      const bombWarningStates = this.bombStates.filter((bombState) => {
        const timeUntilExplosion = bombState.expectedAt - now;
        return timeUntilExplosion <= 5000 && timeUntilExplosion > 0 && !bombState.isWarningSend; // TODO
      });

      // 경고 대상한테 노티
      bombWarningStates.forEach((bombState) => {
        const user = this.getUser(bombState.userId);
        if (!user) {
          return;
        }
        bombState.isWarningSend = true;
        writePayload(user.socket, PACKET_TYPE.WARNING_NOTIFICATION, '', 0, {
          warningType: WarningType.BOMB_WANING,
          expectedAt: bombState.expectedAt,
        } satisfies MessageProps<S2CWarningNotification>);
      });

      // 폭탄 실행 대상
      const bombTargetStates = this.bombStates.filter((bombState) => {
        return bombState.expectedAt <= now;
      });

      bombTargetStates.forEach((bombState) => {
        const user = this.getUser(bombState.userId);

        if (!user) {
          return;
        }

        user.character.takeDamage(2, null);
        user.character.debuffs.delete(CardType.BOMB);

        this.broadcast(PACKET_TYPE.ANIMATION_NOTIFICATION, {
          userId: user.id,
          animationType: AnimationType.BOMB_ANIMATION,
        } satisfies MessageProps<S2CAnimationNotification>);

        this.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
          user: [user.toUserData(user.id)],
        } satisfies MessageProps<S2CUserUpdateNotification>);
      });

      this.bombStates = this.bombStates.filter(
        (stat) => !bombTargetStates.some((warningState) => warningState.userId === stat.userId && warningState.expectedAt === stat.expectedAt),
      );

      // 위치값 전송
      this.broadcast(PACKET_TYPE.POSITION_UPDATE_NOTIFICATION, {
        characterPositions: this.users.map((user) => user.character.positionInfo.toPositionData()),
      } satisfies MessageProps<S2CPositionUpdateNotification>);
    }, 1000 / 5); // targetFrame 5
  }

  stopPositionBroadcast() {
    if (this.infomationBroadcastTimer) {
      clearInterval(this.infomationBroadcastTimer);
      this.infomationBroadcastTimer = null;
    }
  }
}

export class Rooms {
  #rooms = new Map<number, Room>();
  #roomId = 1;

  create(roomId, roomName, ownerId, maxUserNum) {
    if (this.isRoomExist(roomId)) return false;
    const gameEvents = new GameEvents(roomId);
    const room = new Room({
      name: roomName,
      ownerId,
      maxUserNum,
      users: [],
      state: RoomStateType.WAIT,
      gameState: new GameState(gameEvents),
      gameEvents,
    });

    this.#rooms.set(roomId, room);

    gameEvents.setRoom(room);

    return true;
  }

  createRoomId() {
    return this.#roomId++;
  }

  getRoom(roomId: number) {
    if (!this.isRoomExist(roomId)) return null;

    const room = this.#rooms.get(roomId);

    return room ?? null;
  }

  isRoomExist(roomId) {
    return this.#rooms.has(roomId);
  }

  isUserInRoom(roomId, userId) {
    if (!this.isRoomExist(roomId)) return false;

    const room = this.#rooms.get(roomId);

    if (!room) return false;

    return room.users.some((user) => user.id === userId);
  }

  join(roomId: number, user: User, ctx: Context) {
    if (!this.isRoomExist(roomId)) return false;

    const room = this.#rooms.get(roomId);

    if (!room) return false;

    if (this.isFull(roomId)) return false;

    if (this.isUserInRoom(roomId, user.id)) return false;

    room.users.push(user);
    ctx.roomId = roomId;

    return true;
  }

  quit(roomId: number, userId: string, ctx: Context) {
    if (!this.isUserInRoom(roomId, userId)) return null;

    const room = this.#rooms.get(roomId);

    if (!room) return null;

    const userIndex = room.users.findIndex((user) => user.id === userId);

    if (userIndex === -1) return null;

    const [leavedUser] = room.users.splice(userIndex, 1);

    ctx.roomId = 0;

    if (room.users.length === 0) {
      this.removeRoom(roomId);
    }

    return leavedUser;
  }

  removeRoom(roomId: number): boolean {
    const room = this.#rooms.get(roomId);

    if (!room) return false;

    room.resetTimer();
    this.#rooms.delete(roomId);

    return true;
  }

  isFull(roomId) {
    if (!this.isRoomExist(roomId)) return false;

    const room = this.#rooms.get(roomId)!;

    return room.users.length >= room.maxUserNum;
  }

  pickRandomRoomId(unavailableRoomIds: { [K in number]: true }, userId: string) {
    const roomIds = Array.from(this.#rooms.keys());
    const filteredRoomIds = roomIds.filter((roomId) => !unavailableRoomIds[roomId]);

    if (filteredRoomIds.length === 0) {
      const roomId = this.createRoomId();
      this.create(roomId, '덤벼보시지!', userId, 7);

      return roomId;
    }

    const picked = Math.floor(Math.random() * filteredRoomIds.length);
    const roomId = filteredRoomIds[picked];

    if (this.isFull(roomId)) {
      unavailableRoomIds[roomId] = true;
      return this.pickRandomRoomId(unavailableRoomIds, userId);
    }

    return roomId;
  }

  getRoomList() {
    return Array.from(this.#rooms.entries()).map(([roomId, room]) => room.toRoomData(roomId));
  }
}
