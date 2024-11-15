import { PACKET_TYPE } from '../constants/packetType';
import { CharacterStateType, S2CUserUpdateNotification } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { Room } from '../rooms/types';
import { User } from '../users/types';

export function onBBangTimeoutShooter(user: User, room: Room) {
  return () => {
    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [user.toUserData(user.id)],
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}

export function onBBangTimeoutTarget(damage: number, attacker: User, targetUser: User, room: Room) {
  return () => {
    targetUser.character.takeDamage(damage, attacker, room);

    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [targetUser.toUserData(targetUser.id)],
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}

export function onDeathMatchTurnTimeout(user: User, targetUser: User, room: Room) {
  return () => {
    targetUser.character.takeDamage(1, user, room);
    user.character.stateInfo.setState(user.id, CharacterStateType.NONE_CHARACTER_STATE, null);
    targetUser.character.stateInfo.setState(targetUser.id, CharacterStateType.NONE_CHARACTER_STATE, null);

    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [user.toUserData(user.id), targetUser.toUserData(targetUser.id)],
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}

export function onFleaMarketTurnTimeout(user: User, room: Room, usersByOrder: User[]) {
  return () => {
    const userIndex = usersByOrder.findIndex((u) => u.id === user.id);
    const isEnd = userIndex === usersByOrder.length - 1;
    if (isEnd) {
      room.users.forEach((user) => user.character.stateInfo.setState(user.id, CharacterStateType.NONE_CHARACTER_STATE, null));
    } else {
      const nextIndex = userIndex + 1;
      usersByOrder[userIndex].character.stateInfo.setState(usersByOrder[userIndex].id, CharacterStateType.FLEA_MARKET_WAIT, null);
      usersByOrder[nextIndex].character.stateInfo.setState(
        usersByOrder[nextIndex].id,
        CharacterStateType.FLEA_MARKET_TURN,
        onFleaMarketTurnTimeout(usersByOrder[nextIndex], room, usersByOrder),
      );
    }

    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: room.users.map((user) => user.toUserData(user.id)),
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}

export function onGuerillaTargetTimeout(targetUser: User, room: Room) {
  return () => {
    targetUser.character.takeDamage(1, 'SYSTEM', room);
    targetUser.character.stateInfo.setState(BigInt(0), CharacterStateType.NONE_CHARACTER_STATE, null);
    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [targetUser.toUserData(targetUser.id)],
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}

export function onGuerillaShooterTimeout(user: User, room: Room) {
  return () => {
    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [user.toUserData(user.id)],
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}
