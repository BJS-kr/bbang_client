import { EventEmitter } from 'node:events';
import { ContainmentUnit } from '../cards/class/containment.unit';
import { DAILY_CARD_COUNT, GAME_INIT_POSITION } from '../constants/game';
import { SatelliteTarget } from '../cards/class/satellite.target';
import { User } from '../users/types';
import { Room } from '../rooms/types';
import { PACKET_TYPE } from '../constants/packetType';
import { error, log } from '../utils/logger';
import {
  CardType,
  CharacterStateType,
  S2CPhaseUpdateNotification,
  S2CUserUpdateNotification,
  S2CAnimationNotification,
  AnimationType,
  CharacterType,
} from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { checkWinCondition } from './win.condition';
import { rooms } from '../rooms/rooms';
import { Character } from '../characters/class/character';

export class GameEvents extends EventEmitter {
  containedUsers: User[] = [];
  satelliteTargets: User[] = [];
  roomId: number;
  #room: Room;

  constructor(roomId: number) {
    super();
    this.roomId = roomId;
    this.on('DAY', () => {
      if (!this.#room) {
        return error('room is not set in gameEvents');
      }

      const suhfflePositions = [...GAME_INIT_POSITION].sort(() => Math.random() - 0.5);
      this.#room.users.forEach((user, index) => {
        user.character.setPosition(suhfflePositions[index]);
        const handCardCount = user.character.getTotalHandCardCount();
        const removeCount = handCardCount - user.character.hp;
        if (removeCount > 0) {
          user.character.loseRandomCards(removeCount);
        }

        for (let i = 0; i < DAILY_CARD_COUNT; i++) {
          const card = { type: this.#room.pickCardType(), count: 1 };
          user.character.acquireCard(card);
        }
        user.character.bbangCount = 0;
      });

      const updatedUsers: User[] = [];
      this.containedUsers.forEach((cu) => {
        if (ContainmentUnit.canEscape()) {
          cu.character.debuffs.delete(CardType.CONTAINMENT_UNIT);
          this.containedUsers = this.containedUsers.filter((cu) => cu !== cu);
          cu.character.stateInfo.setState(cu.id, CharacterStateType.NONE_CHARACTER_STATE, null);
        } else {
          cu.character.stateInfo.setState(cu.id, CharacterStateType.CONTAINED, null);
        }

        updatedUsers.push(cu);
      });

      this.satelliteTargets.forEach((st) => {
        if (SatelliteTarget.isHit()) {
          st.character.takeDamage(3, 'SYSTEM', this.#room);

          this.#room.broadcast(PACKET_TYPE.ANIMATION_NOTIFICATION, {
            userId: st.id,
            animationType: AnimationType.SATELLITE_TARGET_ANIMATION,
          } satisfies MessageProps<S2CAnimationNotification>);
        } else {
          st.character.debuffs.delete(CardType.SATELLITE_TARGET);
          const userIndex = this.#room.users.findIndex((u) => u === st);
          const nextIndex = userIndex + 1 === this.#room.users.length ? 0 : userIndex + 1;
          const nextUser = this.#room.users[nextIndex];

          nextUser.character.debuffs.add(CardType.SATELLITE_TARGET);
          this.satelliteTargets.push(nextUser);
          this.satelliteTargets = this.satelliteTargets.filter((st) => st !== st);

          updatedUsers.push(st, nextUser);
        }
      });

      this.#room.broadcast(PACKET_TYPE.PHASE_UPDATE_NOTIFICATION, {
        phaseType: this.#room.gameState.phaseType,
        nextPhaseAt: this.#room.gameState.nextPhaseAt,
      } satisfies MessageProps<S2CPhaseUpdateNotification>);

      this.#room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
        user: this.#room.users.map((u) => u.toUserData(u.id)),
      } satisfies MessageProps<S2CUserUpdateNotification>);
    });

    this.on('EVENING', () => {
      this.#room.broadcast(PACKET_TYPE.PHASE_UPDATE_NOTIFICATION, {
        phaseType: this.#room.gameState.phaseType,
        nextPhaseAt: this.#room.gameState.nextPhaseAt,
      } satisfies MessageProps<S2CPhaseUpdateNotification>);
    });

    this.on('END', () => {
      this.#room.broadcast(PACKET_TYPE.PHASE_UPDATE_NOTIFICATION, {
        phaseType: this.#room.gameState.phaseType,
        nextPhaseAt: this.#room.gameState.nextPhaseAt,
      } satisfies MessageProps<S2CPhaseUpdateNotification>);
    });

    this.on('update', (...userIds: string[]) => {
      const users = userIds.map((userId) => this.#room.users.find((u) => u.id === userId)).filter((u) => u !== undefined);

      if (!users.length) {
        return error('user is not found in gameEvents');
      }

      this.#room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
        user: users.map((u) => u.toUserData(u.id)),
      } satisfies MessageProps<S2CUserUpdateNotification>);
    });

    this.on('checkWinCondition', () => {
      log(`[on checkWinCondition] ${rooms} | ${this.#room} | ${this.roomId}`);
      checkWinCondition(rooms, this.#room, this.roomId);
    });

    this.on('dead', (deadCharacter: Character) => {
      const maskUser = this.#room.users.find((u) => u.character.characterType === CharacterType.MASK);

      if (!maskUser) return;

      for (const [type, count] of deadCharacter.handCards) {
        maskUser.character.acquireCard({ type, count });
      }
    });
  }

  setRoom(room: Room) {
    this.#room = room;
  }
}
