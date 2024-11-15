import { Socket } from 'node:net';
import { Room } from '../rooms/types';
import { User } from '../users/types';
import { MessageProps } from '../protobuf/props';
import { CardType, CharacterStateType, GlobalFailCode, S2CCardSelectResponse, S2CUserUpdateNotification } from '../protobuf/compiled';
import { PACKET_TYPE } from '../constants/packetType';
import { writePayload } from '../protobuf/writePayload';
import { UseCardNotification } from './types';
import { UseCardResponse, UserUpdateNotification } from './types';

export function isAbsorb(user: User, targetUser: User) {
  return user.character.stateInfo.state === CharacterStateType.ABSORBING && targetUser.character.stateInfo.state === CharacterStateType.ABSORB_TARGET;
}

export function isHallucination(user: User, targetUser: User) {
  return (
    user.character.stateInfo.state === CharacterStateType.HALLUCINATING &&
    targetUser.character.stateInfo.state === CharacterStateType.HALLUCINATION_TARGET
  );
}

export function isGuerrillaTargetBBang(user: User) {
  return user.character.stateInfo.state === CharacterStateType.GUERRILLA_TARGET;
}

export function isDeathMatchBBang(user: User, targetUser: User) {
  return (
    user.character.stateInfo.state === CharacterStateType.DEATH_MATCH_TURN_STATE &&
    targetUser.character.stateInfo.state === CharacterStateType.DEATH_MATCH_STATE
  );
}
export function responseCardSelect(
  socket: Socket,
  version: string,
  sequence: number,
  room: Room,
  success: boolean,
  failCode: GlobalFailCode,
  users: User[],
) {
  users.forEach((user) => {
    user.character.stateInfo.setState(user.id, CharacterStateType.NONE_CHARACTER_STATE, null);
  });

  room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: users.map((user) => user.toUserData(user.id)),
  } satisfies MessageProps<S2CUserUpdateNotification>);

  writePayload(socket, PACKET_TYPE.CARD_SELECT_RESPONSE, version, sequence, {
    success,
    failCode,
  } satisfies MessageProps<S2CCardSelectResponse>);
}

export function responseSuccess(
  socket: Socket,
  version: string,
  sequence: number,
  cardType: CardType,
  targetUsers: User[],
  room: Room,
  user: User,
  targetUserId: bigint,
) {
  writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE_FAILCODE,
  } satisfies UseCardResponse);

  room.broadcast(PACKET_TYPE.USE_CARD_NOTIFICATION, {
    cardType,
    userId: Number(user.id),
    targetUserId: Number(targetUserId),
  } satisfies MessageProps<UseCardNotification>);

  room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: targetUsers.map((user) => user.toUserData(user.id)),
  } satisfies UserUpdateNotification);
}
