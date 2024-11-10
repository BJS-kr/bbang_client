import { PACKET_TYPE } from '../constants/packetType';
import { RoleType, S2CGameEndNotification, WinType } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { Room, Rooms } from '../rooms/types';
import { log } from '../utils/logger';

function isHitMenAllDead(room: Room) {
  return room.users.filter((u) => u.character.roleType === RoleType.HITMAN).every((u) => u.character.isDead());
}

function isTargetAllDead(room: Room) {
  return room.users.filter((u) => u.character.roleType === RoleType.TARGET).every((u) => u.character.isDead());
}

function isAllDeadExceptPsychopath(room: Room) {
  return room.users.filter((u) => u.character.roleType !== RoleType.PSYCHOPATH).every((u) => u.character.isDead());
}
export function checkWinCondition(rooms: Rooms, room: Room, roomId: number) {
  return () => {
    if (isHitMenAllDead(room)) {
      room.broadcast(PACKET_TYPE.GAME_END_NOTIFICATION, {
        winners: room.users.filter((u) => u.character.roleType === RoleType.TARGET || u.character.roleType === RoleType.BODYGUARD).map((u) => u.id),
        winType: WinType.TARGET_AND_BODYGUARD_WIN,
      } satisfies MessageProps<S2CGameEndNotification>);

      rooms.removeRoom(roomId);
      return;
    }

    if (isTargetAllDead(room)) {
      room.broadcast(PACKET_TYPE.GAME_END_NOTIFICATION, {
        winners: room.users.filter((u) => u.character.roleType === RoleType.HITMAN).map((u) => u.id),
        winType: WinType.HITMAN_WIN,
      } satisfies MessageProps<S2CGameEndNotification>);

      rooms.removeRoom(roomId);
      return;
    }

    if (isAllDeadExceptPsychopath(room)) {
      room.broadcast(PACKET_TYPE.GAME_END_NOTIFICATION, {
        winners: room.users.filter((u) => u.character.roleType === RoleType.PSYCHOPATH).map((u) => u.id),
        winType: WinType.PSYCHOPATH_WIN,
      } satisfies MessageProps<S2CGameEndNotification>);

      rooms.removeRoom(roomId);
      return;
    }
  };
}
