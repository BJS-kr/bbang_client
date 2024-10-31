import { Context } from '../events/types';
import { GameState } from '../game/game.state';
import type { User } from '../users/types';
import { writePayload } from '../utils/writePalyload';

export enum RoomState {
  WAIT = 0,
  PREPARE = 1,
  IN_GAME = 2,
}

export class Room {
  name: string;
  ownerId: string;
  maxUserNum: number;
  users: User[];
  state: RoomState;
  gameState: GameState;

  constructor({
    name,
    ownerId,
    maxUserNum,
    users,
    state,
    gameState,
  }: {
    name: string;
    ownerId: string;
    maxUserNum: number;
    users: User[];
    state: RoomState;
    gameState: GameState;
  }) {
    this.name = name;
    this.ownerId = ownerId;
    this.maxUserNum = maxUserNum;
    this.users = users;
    this.state = state;
    this.gameState = gameState;
  }

  broadcast(packetType: number, version: number, sequence: number, payload: any) {
    this.users.forEach((user) => {
      writePayload(user.socket, packetType, version, sequence, payload);
    });
  }
}

export class Rooms {
  #rooms = new Map<number, Room>();
  #roomId = 1;

  create(roomId, roomName, ownerId, maxUserNum, onPhaseChange) {
    if (this.isRoomExist(roomId)) return false;

    this.#rooms.set(
      roomId,
      new Room({
        name: roomName,
        ownerId,
        maxUserNum,
        users: [],
        state: RoomState.WAIT,
        gameState: new GameState(onPhaseChange),
      }),
    );

    return true;
  }

  createRoomId() {
    return this.#roomId++;
  }

  getRoom(roomId) {
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
      this.#rooms.delete(roomId);
    }

    return leavedUser;
  }

  isFull(roomId) {
    if (!this.isRoomExist(roomId)) return false;

    const room = this.#rooms.get(roomId)!;

    return room.users.length >= room.maxUserNum;
  }

  pickRandomRoomId() {
    const roomIds = Array.from(this.#rooms.keys());
    const picked = Math.floor(Math.random() * roomIds.length);
    const roomId = roomIds[picked];

    if (this.isFull(roomId)) return this.pickRandomRoomId();

    return roomId;
  }

  getRoomList() {
    return Array.from(this.#rooms.entries()).map(([roomId, room]) => ({
      id: roomId,
      ...room,
    }));
  }
}
