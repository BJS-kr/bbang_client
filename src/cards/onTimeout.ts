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
    targetUser.character.takeDamage(damage, attacker);

    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [targetUser.toUserData(targetUser.id)],
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}

export function onDeathMatchTurnTimeout(user: User, targetUser: User, room: Room) {
  return () => {
    targetUser.character.takeDamage(1, user);
    user.character.stateInfo.setState(user.id, CharacterStateType.NONE_CHARACTER_STATE, null);
    targetUser.character.stateInfo.setState(targetUser.id, CharacterStateType.NONE_CHARACTER_STATE, null);

    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [user.toUserData(user.id), targetUser.toUserData(targetUser.id)],
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}

export function onFleaMarketTurnTimeout(user: User, room: Room) {
  return () => {
    const userIndex = room.users.findIndex((u) => u.id === user.id);
    const isEnd = userIndex === room.users.length - 1;
    if (isEnd) {
      room.users.forEach((user) => user.character.stateInfo.setState(user.id, CharacterStateType.NONE_CHARACTER_STATE, null));
    } else {
      const nextIndex = userIndex + 1;
      room.users[userIndex].character.stateInfo.setState(room.users[userIndex].id, CharacterStateType.FLEA_MARKET_WAIT, null);
      room.users[nextIndex].character.stateInfo.setState(
        room.users[nextIndex].id,
        CharacterStateType.FLEA_MARKET_TURN,
        onFleaMarketTurnTimeout(room.users[nextIndex], room),
      );
    }

    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: room.users.map((user) => user.toUserData(user.id)),
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}

export function onGuerillaTargetTimeout(targetUser: User, room: Room) {
  return () => {
    targetUser.character.takeDamage(1, 'SYSTEM');
    targetUser.character.stateInfo.setState('', CharacterStateType.NONE_CHARACTER_STATE, null);
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
