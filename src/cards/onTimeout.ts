import { CharacterState } from '../constants/game';
import { PACKET_TYPE } from '../constants/packetType';
import { S2CUserUpdateNotification } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { Room } from '../rooms/types';
import { User } from '../users/types';

export function onBBangTimeout(damage, targetUser: User, room: Room) {
  return () => {
    targetUser.character.takeDamage(damage);

    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [targetUser.toUserData(targetUser.id)],
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}

export function onDeathMatchTurnTimeout(user: User, targetUser: User, room: Room) {
  return () => {
    user.character.stateInfo.setState(user.id, CharacterState.NONE, null);
    targetUser.character.stateInfo.setState(targetUser.id, CharacterState.NONE, null);

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
      room.users.forEach((user) => user.character.stateInfo.setState(user.id, CharacterState.NONE, null));
    } else {
      const nextIndex = userIndex + 1;
      room.users[nextIndex].character.stateInfo.setState(
        room.users[nextIndex].id,
        CharacterState.FLEA_MARKET_TURN,
        onFleaMarketTurnTimeout(user, room),
      );
    }

    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: room.users.map((user) => user.toUserData(user.id)),
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}
