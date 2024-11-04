import { EventEmitter } from 'node:events';
import { ContainmentUnit } from '../cards/containment.unit';
import { CARD_TYPE } from '../constants/game';
import { SatelliteTarget } from '../cards/satellite.target';
import { User } from '../users/types';
import { Room } from '../rooms/types';
import { PACKET_TYPE } from '../constants/packetType';

export class GameEvents extends EventEmitter {
  containedUsers: User[] = [];
  satelliteTargets: User[] = [];
  bombUsers: User[] = [];
  #room: Room;

  constructor() {
    super();

    this.on('DAY', () => {
      const updateUsers: User[] = [];
      this.containedUsers.forEach((cu) => {
        if (ContainmentUnit.canEscape()) {
          cu.character.debuffs.delete(CARD_TYPE.CONTAINMENT_UNIT);
          this.containedUsers = this.containedUsers.filter((cu) => cu !== cu);
          updateUsers.push(cu);
        }
      });

      this.satelliteTargets.forEach((st) => {
        if (SatelliteTarget.isHit()) {
          st.character.takeDamage(3);
        } else {
          st.character.debuffs.delete(CARD_TYPE.SATELLITE_TARGET);
          this.satelliteTargets = this.satelliteTargets.filter((st) => st !== st);
          updateUsers.push(st);
        }
      });

      this.bombUsers.forEach((bu) => {
        bu.character.takeDamage(2);
        this.bombUsers = this.bombUsers.filter((bu) => bu !== bu);
        updateUsers.push(bu);
      });

      this.#room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
        users: updateUsers.map((u) => u.toUserData(u.id)),
      });
    });
  }

  setRoom(room: Room) {
    this.#room = room;
  }
}
