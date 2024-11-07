import { CARD_TYPE, PHASE_TYPE } from '../constants/game';
import { CardProps, Character } from '../characters/character';
import { CharacterState } from '../constants/game';
import {
  C2SDestroyCardRequest,
  C2SUseCardRequest,
  CardData,
  GlobalFailCode,
  S2CDestroyCardResponse,
  S2CUserUpdateNotification,
} from '../protobuf/compiled';
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
import { BigBBang } from './big.bbang';
import { onBBangTimeoutShooter, onBBangTimeoutTarget, onDeathMatchTurnTimeout, onFleaMarketTurnTimeout } from './onTimeout';
import { Vaccine } from './vaccine';
import { Call119 } from './call119';
import { Guerrilla } from './guerrilla';
import { Absorb } from './absorb';
import { Hallucination } from './hallucination';
import { FleaMarket } from './fleamarket';
import { MaturedSavings } from './matured.savings';
import { SniperGun } from './snipergun';
import { pickRandomCardType } from './pickRandomCard';
import { WinLottery } from './win.lottery';
import { CardEffectNotification, HandlerBase, UseCardResponse, UserUpdateNotification } from './types';
import { responseSuccess } from './response.success';
import { LaserPointer } from './laser.pointer';
import { Radar } from './radar';
import { cards } from './card.instance.index';
import { StealthSuit } from './stealth.suit';
import { ContainmentUnit } from './containment.unit';
import { Bomb } from './bomb';
import { SatelliteTarget } from './satellite.target';
import { HandGun } from './handgun';
import { DesertEagle } from './deserteagle';
import { AutoRifle } from './autorifle';
import { Context } from '../events/types';
import { Socket } from 'node:net';

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
    error(card.message);

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NO_CARD,
    } satisfies UseCardResponse);
  }

  if (room.gameState.phaseType !== PHASE_TYPE.DAY) {
    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_PHASE,
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
    case card instanceof BigBBang:
      log('handleUseCard: BigBBang');
      handleBigBBang(base, room, user);
      break;
    case card instanceof Vaccine:
      log('handleUseCard: Vaccine');
      handleVaccine(base, room, user);
      break;
    case card instanceof Call119:
      log('handleUseCard: Call119');
      handleCall119(base, useCardRequest, room, user);
      break;
    case card instanceof Guerrilla:
      log('handleUseCard: Guerrilla');
      handleGuerrilla(base, room, user);
      break;
    case card instanceof Absorb:
      log('handleUseCard: Absorb');
      handleAbsorb(base, useCardRequest, room, user);
      break;
    case card instanceof Hallucination:
      log('handleUseCard: Hallucination');
      handleHallucination(base, useCardRequest, room, user);
      break;
    case card instanceof FleaMarket:
      log('handleUseCard: FleaMarket');
      handleFleaMarket(base, room, user);
      break;
    case card instanceof MaturedSavings:
      log('handleUseCard: MaturedSavings');
      handleMaturedSavings(base, room, user);
      break;
    case card instanceof SniperGun:
      log('handleUseCard: SniperGun');
      handleSniperGun(base, room, user);
      break;
    case card instanceof HandGun:
      log('handleUseCard: HandGun');
      handleHandGun(base, room, user);
      break;
    case card instanceof DesertEagle:
      log('handleUseCard: DesertEagle');
      handleDesertEagle(base, room, user);
      break;
    case card instanceof AutoRifle:
      log('handleUseCard: AutoRifle');
      handleAutoRifle(base, room, user);
      break;
    case card instanceof WinLottery:
      log('handleUseCard: WinLottery');
      handleWinLottery(base, room, user);
      break;
    case card instanceof LaserPointer:
      log('handleUseCard: LaserPointer');
      handleLaserPointer(base, room, user);
      break;
    case card instanceof Radar:
      log('handleUseCard: Radar');
      handleRadar(base, room, user);
      break;
    case card instanceof AutoShield:
      log('handleUseCard: AutoShield');
      handleAutoShield(base, room, user);
      break;
    case card instanceof StealthSuit:
      log('handleUseCard: StealthSuit');
      handleStealthSuit(base, room, user);
      break;
    case card instanceof ContainmentUnit:
      log('handleUseCard: ContainmentUnit');
      handleContainmentUnit(base, room, user);
      break;
    case card instanceof SatelliteTarget:
      log('handleUseCard: SatelliteTarget');
      handleSatelliteTarget(base, room, user);
      break;
    case card instanceof Bomb:
      log('handleUseCard: Bomb');
      handleBomb(base, room, user);
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
  if (user.character.getMaxBBangCount() <= user.character.useBBangCount) {
    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.ALREADY_USED_BBANG,
    } satisfies UseCardResponse);
  }

  user.character.acquireBBangCount();
  user.character.stateInfo.setState(user.id, CharacterState.BBANG_SHOOTER, onBBangTimeoutShooter(user, room));

  const damage = user.character.getBBangDamage();
  targetUser.character.stateInfo.setState(user.id, CharacterState.BBANG_TARGET, onBBangTimeoutTarget(damage, targetUser, room));

  responseSuccess(socket, version, sequence, CARD_TYPE.BBANG, [user, targetUser], room, user);
  // 기본 방어 확률로 막혔는지 확인 ex) 개굴이
  if (targetUser.character.isDefended()) {
    targetUser.character.stateInfo.setState(targetUser.id, CharacterState.NONE, null);

    return room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [targetUser.toUserData(targetUser.id)],
    } satisfies UserUpdateNotification);
  }

  const isAutoShieldExists = targetUser.character.equips.has(CARD_TYPE.AUTO_SHIELD);
  const autoShield = cards[CARD_TYPE.AUTO_SHIELD];
  // 타겟이 자동 쉴드가 있는 경우 일단 중계
  if (isAutoShieldExists && autoShield instanceof AutoShield) {
    const shielded = autoShield.isAutoShielded();
    shielded && targetUser.character.stateInfo.setState(targetUser.id, CharacterState.NONE, null);

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
  user.character.stateInfo.setState(targetUser.id, CharacterState.DEATH_MATCH, null);
  targetUser.character.stateInfo.setState(user.id, CharacterState.DEATH_MATCH_TURN, onDeathMatchTurnTimeout(user, targetUser, room));

  responseSuccess(socket, version, sequence, CARD_TYPE.BBANG, [user], room, user);
}

function handleShield({ socket, version, sequence, ctx }: HandlerBase, room: Room, user: User) {
  // TODO 나중에 아이템에 의해 필요한 애들도 핸들 할 수 있도록 일관성 있게 고치자..
  if (user.character instanceof Shark || user.character.equips.has(CARD_TYPE.LASER_POINTER)) {
    const shield = user.character.drawCard({ type: CARD_TYPE.SHIELD, count: 1 });
    if (shield instanceof Error) {
      error('handleShield: character have no sufficient amount of shield card');
      // handler에 진입하기 위해 draw했던 카드 반환
      user.character.acquireCard({ type: CARD_TYPE.SHIELD, count: 1 });

      return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
        success: false,
        failCode: GlobalFailCode.CHARACTER_NO_CARD,
      } satisfies UseCardResponse);
    }
  }

  user.character.stateInfo.setState(user.id, CharacterState.NONE, null);
  const shooter = room.getUser(user.character.stateInfo.stateTargetUserId);
  if (!shooter) {
    error('handleShield: shooter not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponse);
  }

  shooter.character.stateInfo.setState(shooter.id, CharacterState.NONE, null);
  responseSuccess(socket, version, sequence, CARD_TYPE.SHIELD, [user, shooter], room, user);
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

  user.character.stateInfo.setState(targetUser.id, CharacterState.DEATH_MATCH, null);
  targetUser.character.stateInfo.setState(user.id, CharacterState.DEATH_MATCH_TURN, onDeathMatchTurnTimeout(user, targetUser, room));

  responseSuccess(socket, version, sequence, CARD_TYPE.DEATH_MATCH, [user, targetUser], room, user);
}

function handleBigBBang({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.stateInfo.setState(user.id, CharacterState.BBANG_SHOOTER, onBBangTimeoutShooter(user, room));

  room.users.forEach((targetUser) => {
    targetUser.character.stateInfo.setState(user.id, CharacterState.BBANG_TARGET, onBBangTimeoutTarget(1, targetUser, room));
  });

  responseSuccess(socket, version, sequence, CARD_TYPE.BIG_BBANG, room.users, room, user);
}

function handleVaccine({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  Character.recover(1, user.character);

  responseSuccess(socket, version, sequence, CARD_TYPE.VACCINE, [user], room, user);
}

function handleCall119({ socket, version, sequence }: HandlerBase, useCardRequest: C2SUseCardRequest, room: Room, user: User) {
  if (useCardRequest.targetUserId === user.id) {
    Character.recover(1, user.character);
  } else {
    room.users.forEach((targetUser) => {
      Character.recover(1, targetUser.character);
    });
  }

  responseSuccess(socket, version, sequence, CARD_TYPE.CALL_119, room.users, room, user);
}

function handleGuerrilla({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  const damage = user.character.getBBangDamage();
  room.users.forEach((targetUser) => {
    user.id !== targetUser.id && targetUser.character.takeDamage(damage);
  });

  responseSuccess(socket, version, sequence, CARD_TYPE.GUERRILLA, room.users, room, user);
}

function handleAbsorb({ socket, version, sequence }: HandlerBase, useCardRequest: C2SUseCardRequest, room: Room, user: User) {
  const targetUser = room.getUser(useCardRequest.targetUserId);

  if (!targetUser) {
    error('handleAbsorb: target user not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponse);
  }

  const randomCard = targetUser.character.getRandomCard();

  // TODO 카드 한장도 없으면 false 맞는지 클라랑 상의
  if (!randomCard) {
    error('handleAbsorb: target user has no card');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.UNKNOWN_ERROR,
    } satisfies UseCardResponse);
  }

  user.character.acquireCard(randomCard);

  responseSuccess(socket, version, sequence, CARD_TYPE.ABSORB, [user, targetUser], room, user);
}

function handleHallucination({ socket, version, sequence }: HandlerBase, useCardRequest: C2SUseCardRequest, room: Room, user: User) {
  const targetUser = room.getUser(useCardRequest.targetUserId);

  if (!targetUser) {
    error('handleHallucination: target user not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponse);
  }

  const randomCard = targetUser.character.getRandomCard();

  if (!randomCard) {
    error('handleHallucination: target user has no card');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.UNKNOWN_ERROR,
    } satisfies UseCardResponse);
  }

  responseSuccess(socket, version, sequence, CARD_TYPE.HALLUCINATION, [user, targetUser], room, user);
}

function handleFleaMarket({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  room.initFleaMarketCards();

  room.users.forEach((user, index) => {
    const state = index === 0 ? CharacterState.FLEA_MARKET_TURN : CharacterState.FLEA_MARKET_WAIT;
    const timeout = state === CharacterState.FLEA_MARKET_TURN ? onFleaMarketTurnTimeout(user, room) : null;
    user.character.stateInfo.setState(user.id, state, timeout);
  });

  responseSuccess(socket, version, sequence, CARD_TYPE.FLEA_MARKET, room.users, room, user);
}

function handleMaturedSavings({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.acquireCard({ type: pickRandomCardType(), count: 1 });
  user.character.acquireCard({ type: pickRandomCardType(), count: 1 });

  responseSuccess(socket, version, sequence, CARD_TYPE.MATURED_SAVINGS, [user], room, user);
}

function handleSniperGun({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.weapon = CARD_TYPE.SNIPER_GUN;
  responseSuccess(socket, version, sequence, CARD_TYPE.SNIPER_GUN, [user], room, user);
}

function handleHandGun({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.weapon = CARD_TYPE.HAND_GUN;
  responseSuccess(socket, version, sequence, CARD_TYPE.HAND_GUN, [user], room, user);
}

function handleDesertEagle({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.weapon = CARD_TYPE.DESERT_EAGLE;
  responseSuccess(socket, version, sequence, CARD_TYPE.DESERT_EAGLE, [user], room, user);
}

function handleAutoRifle({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.weapon = CARD_TYPE.AUTO_RIFLE;
  responseSuccess(socket, version, sequence, CARD_TYPE.AUTO_RIFLE, [user], room, user);
}

function handleWinLottery({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.acquireCard({ type: pickRandomCardType(), count: 1 });
  user.character.acquireCard({ type: pickRandomCardType(), count: 1 });
  user.character.acquireCard({ type: pickRandomCardType(), count: 1 });

  responseSuccess(socket, version, sequence, CARD_TYPE.WIN_LOTTERY, [user], room, user);
}

function handleLaserPointer({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.equips.add(CARD_TYPE.LASER_POINTER);
  responseSuccess(socket, version, sequence, CARD_TYPE.LASER_POINTER, [user], room, user);
}

function handleRadar({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.equips.add(CARD_TYPE.RADAR);
  responseSuccess(socket, version, sequence, CARD_TYPE.RADAR, [user], room, user);
}

function handleAutoShield({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.equips.add(CARD_TYPE.AUTO_SHIELD);
  responseSuccess(socket, version, sequence, CARD_TYPE.AUTO_SHIELD, [user], room, user);
}

function handleStealthSuit({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.equips.add(CARD_TYPE.STEALTH_SUIT);
  responseSuccess(socket, version, sequence, CARD_TYPE.STEALTH_SUIT, [user], room, user);
}

function handleContainmentUnit({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.debuffs.add(CARD_TYPE.CONTAINMENT_UNIT);
  room.gameEvents.containedUsers.push(user);
  responseSuccess(socket, version, sequence, CARD_TYPE.CONTAINMENT_UNIT, [user], room, user);
}

function handleSatelliteTarget({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.debuffs.add(CARD_TYPE.SATELLITE_TARGET);
  room.gameEvents.satelliteTargets.push(user);
  responseSuccess(socket, version, sequence, CARD_TYPE.SATELLITE_TARGET, [user], room, user);
}

function handleBomb({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.debuffs.add(CARD_TYPE.BOMB);
  room.gameEvents.bombUsers.push(user);
  responseSuccess(socket, version, sequence, CARD_TYPE.BOMB, [user], room, user);
}

export function handleDestroyCard(socket: Socket, version: string, sequence: number, cardDestroyRequest: C2SDestroyCardRequest, ctx: Context) {
  if (!ctx.roomId || !ctx.userId) {
    error('handleDestroyCard: roomId or userId not found');
    return;
  }
  const room = rooms.getRoom(ctx.roomId);

  if (!room) {
    error('handleDestroyCard: room not found');
    return;
  }

  const user = room.getUser(ctx.userId);

  if (!user) {
    error('handleDestroyCard: user not found');
    return;
  }

  for (const card of cardDestroyRequest.destroyCards) {
    if (!card.type || !card.count) {
      continue;
    }
    user.character.loseCard({ type: card.type, count: card.count });
  }

  writePayload(socket, PACKET_TYPE.DESTROY_CARD_RESPONSE, version, sequence, {
    handCards: Array.from(user.character.handCards.entries()).map(([type, count]) => ({ type, count })),
  } satisfies MessageProps<S2CDestroyCardResponse>);
}
