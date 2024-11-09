import { PACKET_TYPE } from '../constants/packetType';
import { RoleType, S2CGameEndNotification, WinType } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { Room, Rooms } from '../rooms/types';
import net from 'node:net';
function isHitMenAllDead(room: Room) {
  return room.users.filter((u) => u.character.roleType === RoleType.HITMAN).every((u) => u.character.isDead());
}

function isTargetAllDead(room: Room) {
  return room.users.filter((u) => u.character.roleType === RoleType.TARGET).every((u) => u.character.isDead());
}

function isAllDeadExceptPsychopath(room: Room) {
  return room.users.filter((u) => u.character.roleType !== RoleType.PSYCHOPATH).every((u) => u.character.isDead());
}
export function checkWinCondition(socket: net.Socket, version: string, sequence: number, rooms: Rooms, roomId: number) {
  const room = rooms.getRoom(roomId);

  if (!room) {
    throw new Error('Room not found in checkWinCondition');
  }

  return () => {
    if (isHitMenAllDead(room)) {
      rooms.removeRoom(roomId);

      return room.broadcast(PACKET_TYPE.GAME_END_NOTIFICATION, {
        winners: room.users.filter((u) => u.character.roleType === RoleType.TARGET || u.character.roleType === RoleType.BODYGUARD).map((u) => u.id),
        winType: WinType.TARGET_AND_BODYGUARD,
      } satisfies MessageProps<S2CGameEndNotification>);
    }

    if (isTargetAllDead(room)) {
      rooms.removeRoom(roomId);

      return room.broadcast(PACKET_TYPE.GAME_END_NOTIFICATION, {
        winners: room.users.filter((u) => u.character.roleType === RoleType.HITMAN).map((u) => u.id),
        winType: WinType.HITMAN,
      } satisfies MessageProps<S2CGameEndNotification>);
    }

    if (isAllDeadExceptPsychopath(room)) {
      rooms.removeRoom(roomId);

      return room.broadcast(PACKET_TYPE.GAME_END_NOTIFICATION, {
        winners: room.users.filter((u) => u.character.roleType === RoleType.PSYCHOPATH).map((u) => u.id),
        winType: WinType.PSYCHOPATH,
      } satisfies MessageProps<S2CGameEndNotification>);
    }
  };
}
