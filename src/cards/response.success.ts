import { GlobalFailCode } from '../protobuf/compiled';

import { User } from '../users/types';
import { Room } from '../rooms/types';
import { UseCardNotification, UseCardResponse, UserUpdateNotification } from './types';
import { PACKET_TYPE } from '../constants/packetType';
import { CARD_TYPE } from '../constants/game';

import { writePayload } from '../protobuf/writePayload';
import { Socket } from 'node:net';

export function responseSuccess(
  socket: Socket,
  version: string,
  sequence: number,
  cardType: CARD_TYPE | (typeof PACKET_TYPE)[keyof typeof PACKET_TYPE],
  targetUsers: User[],
  room: Room,
  user: User,
) {
  writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies UseCardResponse);

  room.broadcast(PACKET_TYPE.USE_CARD_NOTIFICATION, {
    cardType,
    userId: user.id,
    targetUserId: '',
  } satisfies UseCardNotification);

  room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: targetUsers.map((user) => user.toUserData(user.id)),
  } satisfies UserUpdateNotification);
}
