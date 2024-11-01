import { CARD_TYPE } from '../constants/game';
import { CardProps, Character } from '../characters/character';
import { CharacterState } from '../constants/game';
import { Context } from '../events/types';
import {
  C2SUseCardRequest,
  GlobalFailCode,
  S2CCardEffectNotification,
  S2CUseCardNotification,
  S2CUseCardResponse,
  S2CUserUpdateNotification,
} from '../protobuf/compiled';
import { Socket } from 'node:net';
import { rooms } from '../rooms/rooms';
import { writePayload } from '../utils/writePayload';
import { MessageProps } from '../protobuf/props';
import { PACKET_TYPE } from '../constants/packetType';
import { error, log } from '../utils/logger';
import { BBang } from './bbang';
import { Room } from '../rooms/types';
import { Shield } from './shield';
import { AutoShield } from './shield.auto';
import { User } from '../users/types';

type UseCardResponsePayload = MessageProps<S2CUseCardResponse>;
type HandlerBase = {
  socket: Socket;
  version: string;
  sequence: number;
  ctx: Context;
};

export function handleUseCard({ socket, version, sequence, ctx }: HandlerBase, useCardRequest: C2SUseCardRequest) {
  log(`handleUseCard: useCardRequest: ${JSON.stringify(useCardRequest)}`);

  const cardProps: CardProps = { type: useCardRequest.cardType, count: 1 };
  const room = rooms.getRoom(ctx.roomId);

  if (!room) {
    error('handleUseCard: room not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.ROOM_NOT_FOUND,
    } satisfies UseCardResponsePayload);
  }

  const user = room.getUser(ctx.userId);

  if (!user) {
    error('handleUseCard: user not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponsePayload);
  }

  const card = user.character.drawCard(cardProps);

  if (card instanceof Error) {
    error('handleUseCard: character no card');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NO_CARD,
    } satisfies UseCardResponsePayload);
  }

  const base = { socket, version, sequence, ctx };
  switch (true) {
    case card instanceof BBang:
      log('handleUseCard: BBang');
      handleBBang(base, user, room, useCardRequest.targetUserId);
      break;
    case card instanceof Shield:
      log('handleUseCard: Shield');
      handleShield(base, room, user);
      break;
    default:
      error(`handleUseCard: unknown card. card type: ${card.type}`);
      return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
        success: false,
        failCode: GlobalFailCode.UNKNOWN_ERROR,
      } satisfies UseCardResponsePayload);
  }
}

function handleBBang({ socket, version, sequence }: HandlerBase, user: User, room: Room, targetUserId: string) {
  const targetUser = room.getUser(targetUserId);

  if (!targetUser) {
    error('handleBBang: target user not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponsePayload);
  }

  user.character.stateInfo.setState(CharacterState.BBANG_SHOOTER);
  targetUser.character.stateInfo.setState(CharacterState.BBANG_TARGET);
  targetUser.character.setOnStateTimeout((from) => {
    if (from === CharacterState.BBANG_TARGET) targetUser.character.takeDamage(1);
  });

  const payload: UseCardResponsePayload = {
    success: true,
    failCode: GlobalFailCode.NONE,
  };

  // 빵 사용자에게 응답
  writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, payload);

  // 빵 사용 중계
  room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: [user.toUserData(user.id), targetUser.toUserData(targetUserId)],
  });

  const autoShield = targetUser.character.drawCard({ type: CARD_TYPE.AUTO_SHIELD, count: 1 });
  // 타겟이 자동 쉴드가 있는 경우 일단 중계
  if (autoShield instanceof AutoShield) {
    const shielded = autoShield.isAutoShielded();
    shielded && targetUser.character.stateInfo.setState(CharacterState.NONE);

    room.broadcast(PACKET_TYPE.CARD_EFFECT_NOTIFICATION, {
      success: shielded,
      userId: targetUserId,
      cardType: CARD_TYPE.AUTO_SHIELD,
    } satisfies MessageProps<S2CCardEffectNotification>);

    shielded &&
      room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
        user: [targetUser.toUserData(targetUserId)],
      } satisfies MessageProps<S2CUserUpdateNotification>);
  }
}

function handleShield({ socket, version, sequence, ctx }: HandlerBase, room: Room, user: User) {
  writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies UseCardResponsePayload);

  room.broadcast(PACKET_TYPE.USE_CARD_NOTIFICATION, {
    cardType: CARD_TYPE.SHIELD,
    userId: ctx.userId,
    targetUserId: '',
  } satisfies MessageProps<S2CUseCardNotification>);

  const shield = user.character.drawCard({ type: CARD_TYPE.SHIELD, count: 1 });

  if (shield instanceof Shield) {
    user.character.stateInfo.setState(CharacterState.NONE);
    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [user.toUserData(ctx.userId)],
    } satisfies MessageProps<S2CUserUpdateNotification>);
  }
}
