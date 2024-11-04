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
    user.character.stateInfo.setState(CharacterState.NONE, null);
    targetUser.character.stateInfo.setState(CharacterState.NONE, null);

    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [user.toUserData(user.id), targetUser.toUserData(targetUser.id)],
    } satisfies MessageProps<S2CUserUpdateNotification>);
  };
}
