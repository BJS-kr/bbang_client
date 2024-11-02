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
import { writePayload } from '../protobuf/writePayload';
import { MessageProps } from '../protobuf/props';
import { PACKET_TYPE } from '../constants/packetType';
import { error, log } from '../utils/logger';
import { BBang } from './bbang';
import { Room } from '../rooms/types';
import { Shield } from './shield';
import { AutoShield } from './shield.auto';
import { User } from '../users/types';
import { Shark } from '../characters/shark';
import { DeathMatch } from './deathmatch';
import { Massacre } from './massacre';

type UseCardResponse = MessageProps<S2CUseCardResponse>;
type UserUpdateNotification = MessageProps<S2CUserUpdateNotification>;
type CardEffectNotification = MessageProps<S2CCardEffectNotification>;
type UseCardNotification = MessageProps<S2CUseCardNotification>;

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
    } satisfies UseCardResponse);
  }

  const user = room.getUser(ctx.userId);

  if (!user) {
    error('handleUseCard: user not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponse);
  }

  const card = user.character.drawCard(cardProps);

  if (card instanceof Error) {
    error('handleUseCard: character no card');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NO_CARD,
    } satisfies UseCardResponse);
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
    case card instanceof DeathMatch:
      log('handleUseCard: DeathMatch');
      handleDeathMatch(base, useCardRequest, room, user);
      break;
    case card instanceof Massacre:
      log('handleUseCard: Massacre');
      handleMassacre(base, room, user);
      break;
    default:
      error(`handleUseCard: unknown card. card type: ${card.type}`);
      return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
        success: false,
        failCode: GlobalFailCode.UNKNOWN_ERROR,
      } satisfies UseCardResponse);
  }
}

function handleBBang({ socket, version, sequence, ctx }: HandlerBase, user: User, room: Room, targetUserId: string) {
  const targetUser = room.getUser(targetUserId);

  if (!targetUser) {
    error('handleBBang: target user not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponse);
  }

  // 데스매치 타겟이 된 사용자가 빵 리퀘스트를 보냈으므로 user가 DEATH_MATCH_TURN, targetUser가 DEATH_MATCH 상태임
  if (isDeathMatchBBang(user, targetUser)) {
    return handleDeathMatchBBang({ socket, version, sequence, ctx }, user, targetUser, room);
  }

  return handleNormalBBang({ socket, version, sequence, ctx }, user, targetUser, room);
}

function handleNormalBBang({ socket, version, sequence }: HandlerBase, user: User, targetUser: User, room: Room) {
  user.character.stateInfo.setState(CharacterState.BBANG_SHOOTER);
  targetUser.character.stateInfo.setState(CharacterState.BBANG_TARGET);
  targetUser.character.setOnStateTimeout((from) => from === CharacterState.BBANG_TARGET && targetUser.character.takeDamage(1));

  const payload: UseCardResponse = {
    success: true,
    failCode: GlobalFailCode.NONE,
  };

  // 빵 사용자에게 응답
  writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, payload);

  // 빵 사용 중계
  room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: [user.toUserData(user.id), targetUser.toUserData(targetUser.id)],
  });

  // 기본 방어 롹률로 막혔는지 확인 ex) 개굴이
  if (targetUser.character.isDefended()) {
    targetUser.character.stateInfo.setState(CharacterState.NONE);

    return room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [targetUser.toUserData(targetUser.id)],
    } satisfies UserUpdateNotification);
  }

  const autoShield = targetUser.character.drawCard({ type: CARD_TYPE.AUTO_SHIELD, count: 1 });
  // 타겟이 자동 쉴드가 있는 경우 일단 중계
  if (autoShield instanceof AutoShield) {
    const shielded = autoShield.isAutoShielded();
    shielded && targetUser.character.stateInfo.setState(CharacterState.NONE);

    room.broadcast(PACKET_TYPE.CARD_EFFECT_NOTIFICATION, {
      success: shielded,
      userId: targetUser.id,
      cardType: CARD_TYPE.AUTO_SHIELD,
    } satisfies CardEffectNotification);

    shielded &&
      room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
        user: [targetUser.toUserData(targetUser.id)],
      } satisfies MessageProps<S2CUserUpdateNotification>);
  }
}

function isDeathMatchBBang(user: User, targetUser: User) {
  return user.character.stateInfo.state === CharacterState.DEATH_MATCH && targetUser.character.stateInfo.state === CharacterState.DEATH_MATCH_TURN;
}

function handleDeathMatchBBang({ socket, version, sequence }: HandlerBase, user: User, targetUser: User, room: Room) {
  const bbang = user.character.drawCard({ type: CARD_TYPE.BBANG, count: 1 });

  if (bbang instanceof Error) {
    error('handleBBang: character no bbang card. it could have been insufficient amount of card');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NO_CARD,
    } satisfies UseCardResponse);
  }

  user.character.stateInfo.setState(CharacterState.DEATH_MATCH);
  targetUser.character.stateInfo.setState(CharacterState.DEATH_MATCH_TURN);
  targetUser.character.setOnStateTimeout((from) => {
    if (from === CharacterState.DEATH_MATCH_TURN) targetUser.character.takeDamage(1);
  });

  writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies UseCardResponse);

  return room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: [user.toUserData(user.id)],
  } satisfies UserUpdateNotification);
}

function handleShield({ socket, version, sequence, ctx }: HandlerBase, room: Room, user: User) {
  writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies UseCardResponse);

  room.broadcast(PACKET_TYPE.USE_CARD_NOTIFICATION, {
    cardType: CARD_TYPE.SHIELD,
    userId: ctx.userId,
    targetUserId: '',
  } satisfies UseCardNotification);

  // TODO 나중에 아이템에 의해 필요한 애들도 핸들 할 수 있도록 일관성 있게 고치자..
  const countToShield = user.character instanceof Shark ? 2 : 1;
  const shield = user.character.drawCard({ type: CARD_TYPE.SHIELD, count: countToShield });

  if (shield instanceof Error) {
    return error('handleShield: character no shield card. it could have been insufficient amount of card');
  }

  if (shield instanceof Shield) {
    user.character.stateInfo.setState(CharacterState.NONE);
    room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [user.toUserData(ctx.userId)],
    } satisfies UserUpdateNotification);
  }
}

function handleDeathMatch({ socket, version, sequence }: HandlerBase, useCardRequest: C2SUseCardRequest, room: Room, user: User) {
  const targetUser = room.getUser(useCardRequest.targetUserId);

  if (!targetUser) {
    error('handleDeathMatch: target user not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponse);
  }

  user.character.stateInfo.setState(CharacterState.DEATH_MATCH);
  targetUser.character.stateInfo.setState(CharacterState.DEATH_MATCH_TURN);
  targetUser.character.setOnStateTimeout((from) => from === CharacterState.DEATH_MATCH_TURN && targetUser.character.takeDamage(1));

  writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies UseCardResponse);

  room.broadcast(PACKET_TYPE.USE_CARD_NOTIFICATION, {
    cardType: CARD_TYPE.DEATH_MATCH,
    userId: user.id,
    targetUserId: useCardRequest.targetUserId,
  } satisfies UseCardNotification);
}

function handleMassacre({ socket, version, sequence, ctx }: HandlerBase, room: Room, user: User) {
  user.character.stateInfo.setState(CharacterState.BBANG_SHOOTER);
  room.users.forEach((targetUser) => {
    targetUser.character.stateInfo.setState(CharacterState.BBANG_TARGET);
    handleNormalBBang({ socket, version, sequence, ctx }, user, targetUser, room);
  });

  writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies UseCardResponse);

  room.broadcast(PACKET_TYPE.USE_CARD_NOTIFICATION, {
    cardType: CARD_TYPE.MASSACRE,
    userId: user.id,
    targetUserId: '',
  } satisfies UseCardNotification);
}
