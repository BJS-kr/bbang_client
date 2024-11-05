import { EventEmitter } from 'node:events';
import { ContainmentUnit } from '../cards/containment.unit';
import { CARD_TYPE, DAILY_CARD_COUNT, GAME_INIT_POSITION } from '../constants/game';
import { SatelliteTarget } from '../cards/satellite.target';
import { User } from '../users/types';
import { Room } from '../rooms/types';
import { PACKET_TYPE } from '../constants/packetType';
import { error } from '../utils/logger';
import { S2CPhaseUpdateNotification, S2CUserUpdateNotification } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { pickRandomCardType } from '../cards/pickRandomCard';

const cardTypes = Object.values(CARD_TYPE);

export class GameEvents extends EventEmitter {
  containedUsers: User[] = [];
  satelliteTargets: User[] = [];
  bombUsers: User[] = [];
  #room: Room;

  constructor() {
    super();

    this.on('DAY', () => {
      if (!this.#room) {
        return error('room is not set in gameEvents');
      }

      const suhfflePositions = [...GAME_INIT_POSITION].sort(() => Math.random() - 0.5);
      this.#room.users.forEach((user, index) => {
        user.character.position = suhfflePositions[index];
        const handCards = user.character.getHandCards();
        const removeCount = handCards.length - user.character.hp;
        if (removeCount > 0) {
          user.character.loseRandomCards(removeCount);
        }
        for (let i = 0; i < DAILY_CARD_COUNT; i++) {
          const card = { type: pickRandomCardType(), count: 1 };
          user.character.acquireCard(card);
        }
        user.character.useBBangCount = 0;
      });

      const updatedUsers: User[] = [];
      this.containedUsers.forEach((cu) => {
        if (ContainmentUnit.canEscape()) {
          cu.character.debuffs.delete(CARD_TYPE.CONTAINMENT_UNIT);
          this.containedUsers = this.containedUsers.filter((cu) => cu !== cu);
          updatedUsers.push(cu);
        }
      });

      this.satelliteTargets.forEach((st) => {
        if (SatelliteTarget.isHit()) {
          st.character.takeDamage(3);
        } else {
          st.character.debuffs.delete(CARD_TYPE.SATELLITE_TARGET);
          const userIndex = this.#room.users.findIndex((u) => u === st);
          const nextIndex = userIndex + 1 === this.#room.users.length ? 0 : userIndex + 1;
          const nextUser = this.#room.users[nextIndex];

          nextUser.character.debuffs.add(CARD_TYPE.SATELLITE_TARGET);
          this.satelliteTargets.push(nextUser);
          this.satelliteTargets = this.satelliteTargets.filter((st) => st !== st);

          updatedUsers.push(st, nextUser);
        }
      });

      // TODO bomb넘기는건 어떻게 처리함...?
      this.bombUsers.forEach((bu) => {
        bu.character.takeDamage(2);
        this.bombUsers = this.bombUsers.filter((bu) => bu !== bu);
        updatedUsers.push(bu);
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
  }

  setRoom(room: Room) {
    this.#room = room;
  }
}
