import { Socket } from 'node:net';
import { Room } from '../../rooms/types';
import { User } from '../../users/types';
import { MessageProps } from '../../protobuf/props';
import { GlobalFailCode, S2CCardSelectResponse, S2CUserUpdateNotification } from '../../protobuf/compiled';
import { CARD_TYPE, CharacterState } from '../../constants/game';
import { PACKET_TYPE } from '../../constants/packetType';
import { writePayload } from '../../protobuf/writePayload';
import { UseCardNotification } from './types';
import { UseCardResponse, UserUpdateNotification } from './types';

export function isAbsorb(user: User, targetUser: User) {
  return user.character.stateInfo.state === CharacterState.ABSORBING && targetUser.character.stateInfo.state === CharacterState.ABSORB_TARGET;
}

export function isHallucination(user: User, targetUser: User) {
  return (
    user.character.stateInfo.state === CharacterState.HALLUCINATING && targetUser.character.stateInfo.state === CharacterState.HALLUCINATION_TARGET
  );
}

export function isGuerrillaTargetBBang(user: User) {
  return user.character.stateInfo.state === CharacterState.GUERRILLA_TARGET;
}

export function isDeathMatchBBang(user: User, targetUser: User) {
  return user.character.stateInfo.state === CharacterState.DEATH_MATCH_TURN && targetUser.character.stateInfo.state === CharacterState.DEATH_MATCH;
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
    user.character.stateInfo.setState(user.id, CharacterState.NONE, null);
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
  cardType: CARD_TYPE | (typeof PACKET_TYPE)[keyof typeof PACKET_TYPE],
  targetUsers: User[],
  room: Room,
  user: User,
  targetUserId: string,
) {
  writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies UseCardResponse);

  room.broadcast(PACKET_TYPE.USE_CARD_NOTIFICATION, {
    cardType,
    userId: user.id,
    targetUserId: targetUserId,
  } satisfies UseCardNotification);

  room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: targetUsers.map((user) => user.toUserData(user.id)),
  } satisfies UserUpdateNotification);
}

const cardTypes = Object.values(CARD_TYPE).filter((v) => typeof v === 'number');

export function pickRandomCardType() {
  return cardTypes[Math.floor(Math.random() * cardTypes.length)];
}
