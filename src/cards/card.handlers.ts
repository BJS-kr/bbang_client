import { CardProps, Character } from '../characters/class/character';
import {
  C2SCardSelectRequest,
  C2SDestroyCardRequest,
  C2SPassDebuffRequest,
  C2SUseCardRequest,
  CardType,
  CharacterStateType,
  GlobalFailCode,
  PhaseType,
  S2CCardSelectResponse,
  S2CDestroyCardResponse,
  S2CFleaMarketNotification,
  S2CPassDebuffResponse,
  S2CUserUpdateNotification,
} from '../protobuf/compiled';
import { rooms } from '../rooms/rooms';
import { writePayload } from '../protobuf/writePayload';
import { MessageProps } from '../protobuf/props';
import { PACKET_TYPE } from '../constants/packetType';
import { error, log } from '../utils/logger';
import { BBang } from './class/bbang';
import { Room } from '../rooms/types';
import { Shield } from './class/shield';
import { AutoShield } from './class/shield.auto';
import { User } from '../users/types';
import { DeathMatch } from './class/deathmatch';
import { BigBBang } from './class/big.bbang';
import {
  onBBangTimeoutShooter,
  onBBangTimeoutTarget,
  onDeathMatchTurnTimeout,
  onFleaMarketTurnTimeout,
  onGuerillaShooterTimeout,
  onGuerillaTargetTimeout,
} from './utils/onTimeout';
import { Vaccine } from './class/vaccine';
import { Call119 } from './class/call119';
import { Guerrilla } from './class/guerrilla';
import { Absorb } from './class/absorb';
import { Hallucination } from './class/hallucination';
import { FleaMarket } from './class/fleamarket';
import { MaturedSavings } from './class/matured.savings';
import { SniperGun } from './class/snipergun';
import { WinLottery } from './class/win.lottery';
import { CardEffectNotification, HandlerBase, UseCardResponse, UserUpdateNotification } from './utils/types';
import { LaserPointer } from './class/laser.pointer';
import { Radar } from './class/radar';
import { cards } from './card.instance.index';
import { StealthSuit } from './class/stealth.suit';
import { ContainmentUnit } from './class/containment.unit';
import { Bomb } from './class/bomb';
import { SatelliteTarget } from './class/satellite.target';
import { HandGun } from './class/handgun';
import { DesertEagle } from './class/deserteagle';
import { AutoRifle } from './class/autorifle';
import { Context } from '../events/types';
import { Socket } from 'node:net';
import {
  isAbsorb,
  isDeathMatchBBang,
  isGuerrillaTargetBBang,
  isHallucination,
  pickRandomCardType,
  responseCardSelect,
  responseSuccess,
} from './utils/helpers';

export function handleCardSelect({ socket, version, sequence, ctx }: HandlerBase, cardSelectRequest: C2SCardSelectRequest) {
  cardSelectRequest.selectType ||= 0;
  cardSelectRequest.selectCardType ||= 0;
  log(`handleCardSelect: cardSelectRequest: ${JSON.stringify(cardSelectRequest, null, 2)}`);

  const room = rooms.getRoom(ctx.roomId);

  if (!room) {
    error('handleCardSelect: room not found');

    return writePayload(socket, PACKET_TYPE.CARD_SELECT_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.ROOM_NOT_FOUND,
    } satisfies MessageProps<S2CCardSelectResponse>);
  }

  const user = room.getUser(ctx.userId);

  if (!user) {
    error('handleCardSelect: user not found');

    return writePayload(socket, PACKET_TYPE.CARD_SELECT_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies MessageProps<S2CCardSelectResponse>);
  }

  if (user.character.stateInfo.state === CharacterStateType.CONTAINED) {
    error('handleCardSelect: user is contained');

    return writePayload(socket, PACKET_TYPE.CARD_SELECT_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_CONTAINED,
    } satisfies UseCardResponse);
  }

  const targetUser = room.getUser(user.character.stateInfo.stateTargetUserId);

  if (!targetUser) {
    error('handleCardSelect: target user not found');
    return responseCardSelect(socket, version, sequence, room, false, GlobalFailCode.CHARACTER_NOT_FOUND, [user]);
  }

  log(`handleCardSelect: user: ${JSON.stringify(user.character, null, 2)} | targetUser: ${JSON.stringify(targetUser.character, null, 2)}`);

  if (!isAbsorb(user, targetUser) && !isHallucination(user, targetUser)) {
    error('handleCardSelect: unknown state');
    return responseCardSelect(socket, version, sequence, room, false, GlobalFailCode.UNKNOWN_ERROR, [user, targetUser]);
  }

  if (isAbsorb(user, targetUser)) {
    switch (cardSelectRequest.selectType) {
      case 0:
        const targetUserCard = targetUser.character.getRandomCard();

        if (!targetUserCard) {
          error('handleCardSelect: target user has no card');
          return responseCardSelect(socket, version, sequence, room, false, GlobalFailCode.CHARACTER_NO_CARD, [user, targetUser]);
        }

        user.character.acquireCard(targetUserCard);
        break;
      case 1:
        const isExists = targetUser.character.equips.has(cardSelectRequest.selectCardType);
        if (!isExists) {
          error('handleCardSelect: target user has no card');
          return responseCardSelect(socket, version, sequence, room, false, GlobalFailCode.CHARACTER_NO_CARD, [user, targetUser]);
        }

        targetUser.character.equips.delete(cardSelectRequest.selectCardType);
        user.character.acquireCard({ type: cardSelectRequest.selectCardType, count: 1 });
        break;
      default:
        error('handleCardSelect: unknown select type');
        return responseCardSelect(socket, version, sequence, room, false, GlobalFailCode.UNKNOWN_ERROR, [user, targetUser]);
    }
  } else if (isHallucination(user, targetUser)) {
    switch (cardSelectRequest.selectType) {
      case 0:
        if (!targetUser.character.loseRandomCards(1)) {
          error('handleCardSelect: target user has no card');
          return responseCardSelect(socket, version, sequence, room, false, GlobalFailCode.CHARACTER_NO_CARD, [user, targetUser]);
        }
        break;
      case 1:
        const isExists = targetUser.character.equips.has(cardSelectRequest.selectCardType);
        if (!isExists) {
          error('handleCardSelect: target user has no card');
          return responseCardSelect(socket, version, sequence, room, false, GlobalFailCode.CHARACTER_NO_CARD, [user, targetUser]);
        }

        targetUser.character.equips.delete(cardSelectRequest.selectCardType);
        break;
      case 2:
        if (!user.character.weapon) {
          error('handleCardSelect: user has no weapon');
          return responseCardSelect(socket, version, sequence, room, false, GlobalFailCode.CHARACTER_NO_CARD, [user, targetUser]);
        }

        user.character.weapon = 0;
        break;
      case 3: {
        const isExists = user.character.debuffs.has(cardSelectRequest.selectCardType);
        if (!isExists) {
          error('handleCardSelect: user has no card');
          return responseCardSelect(socket, version, sequence, room, false, GlobalFailCode.CHARACTER_NO_CARD, [user, targetUser]);
        }

        user.character.debuffs.delete(cardSelectRequest.selectCardType);
        break;
      }
      default:
        error('handleCardSelect: unknown select type');
        return responseCardSelect(socket, version, sequence, room, false, GlobalFailCode.UNKNOWN_ERROR, [user, targetUser]);
    }
  }

  return responseCardSelect(socket, version, sequence, room, true, GlobalFailCode.NONE, [user, targetUser]);
}

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

  if (room.gameState.phaseType !== PhaseType.DAY) {
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
      handleContainmentUnit(base, useCardRequest, room, user);
      break;
    case card instanceof SatelliteTarget:
      log('handleUseCard: SatelliteTarget');
      handleSatelliteTarget(base, useCardRequest, room, user);
      break;
    case card instanceof Bomb:
      log('handleUseCard: Bomb');
      handleBomb(base, useCardRequest, room, user);
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

  log(`[handleBBang] user: ${JSON.stringify(user.character, null, 2)} | targetUser: ${JSON.stringify(targetUser.character, null, 2)}`);
  if (isGuerrillaTargetBBang(user)) {
    // 게릴라 타겟이 된 경우 빵으로 자신을 방어할 수 있다.
    return handleGuerrillaTargetBBang({ socket, version, sequence, ctx }, user, targetUser, room);
  } else if (isDeathMatchBBang(user, targetUser)) {
    // 데스매치 타겟이 된 사용자가 빵 리퀘스트를 보냈으므로 user가 DEATH_MATCH_TURN, targetUser가 DEATH_MATCH 상태임
    return handleDeathMatchBBang({ socket, version, sequence, ctx }, user, targetUser, room);
  }

  return handleNormalBBang({ socket, version, sequence, ctx }, user, targetUser, room);
}

function handleGuerrillaTargetBBang({ socket, version, sequence }: HandlerBase, user: User, targetUser: User, room: Room) {
  user.character.stateInfo.setState(targetUser.id, CharacterStateType.NONE, null);
  room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: [user.toUserData(user.id)],
  } satisfies MessageProps<S2CUserUpdateNotification>);
}

function handleNormalBBang({ socket, version, sequence }: HandlerBase, user: User, targetUser: User, room: Room) {
  if (user.character.getMaxBBangCount() <= user.character.useBBangCount) {
    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.ALREADY_USED_BBANG,
    } satisfies UseCardResponse);
  }

  user.character.increaseBBangCount();
  user.character.stateInfo.setState(targetUser.id, CharacterStateType.BBANG_SHOOTER, onBBangTimeoutShooter(user, room));

  const damage = user.character.getBBangDamage();
  targetUser.character.stateInfo.setState(user.id, CharacterStateType.BBANG_TARGET, onBBangTimeoutTarget(damage, targetUser, room));

  responseSuccess(socket, version, sequence, CardType.BBANG, [user, targetUser], room, user, targetUser.id);
  // 기본 방어 확률로 막혔는지 확인 ex) 개굴이
  if (targetUser.character.isDefended()) {
    targetUser.character.stateInfo.setState('', CharacterStateType.NONE, null);

    return room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      user: [targetUser.toUserData(targetUser.id)],
    } satisfies UserUpdateNotification);
  }

  const isAutoShieldExists = targetUser.character.equips.has(CardType.AUTO_SHIELD);
  const autoShield = cards[CardType.AUTO_SHIELD];
  // 타겟이 자동 쉴드가 있는 경우 일단 중계
  if (isAutoShieldExists && autoShield instanceof AutoShield) {
    const shielded = autoShield.isAutoShielded();
    shielded && targetUser.character.stateInfo.setState('', CharacterStateType.NONE, null);

    room.broadcast(PACKET_TYPE.CARD_EFFECT_NOTIFICATION, {
      success: shielded,
      userId: targetUser.id,
      cardType: CardType.AUTO_SHIELD,
    } satisfies CardEffectNotification);

    shielded &&
      room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
        user: [targetUser.toUserData(targetUser.id)],
      } satisfies MessageProps<S2CUserUpdateNotification>);
  }
}

function handleDeathMatchBBang({ socket, version, sequence }: HandlerBase, user: User, targetUser: User, room: Room) {
  user.character.stateInfo.setState(targetUser.id, CharacterStateType.DEATH_MATCH, null);
  targetUser.character.stateInfo.setState(user.id, CharacterStateType.DEATH_MATCH_TURN, onDeathMatchTurnTimeout(user, targetUser, room));

  responseSuccess(socket, version, sequence, CardType.BBANG, [user, targetUser], room, user, targetUser.id);
}

function handleShield({ socket, version, sequence, ctx }: HandlerBase, room: Room, user: User) {
  // TODO 나중에 아이템에 의해 필요한 애들도 핸들 할 수 있도록 일관성 있게 고치자..
  const targetUser = room.getUser(user.character.stateInfo.stateTargetUserId);

  if (!targetUser) {
    error('handleShield: target user not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponse);
  }

  if (user.character.getShieldAmount(targetUser.character) > 1) {
    // 두번 째 쉴드 draw. 첫 번째 쉴드는 카드 타입으로 인해 handleUseCard에서 이미 뽑았음
    const shield = user.character.drawCard({ type: CardType.SHIELD, count: 1 });

    if (shield instanceof Error) {
      error('handleShield: character have no sufficient amount of shield card');
      // handler에 진입하기 위해 draw했던 카드 반환
      user.character.acquireCard({ type: CardType.SHIELD, count: 1 });

      return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
        success: false,
        failCode: GlobalFailCode.CHARACTER_NO_CARD,
      } satisfies UseCardResponse);
    }
  }

  user.character.stateInfo.setState(user.id, CharacterStateType.NONE, null);
  const shooter = room.getUser(user.character.stateInfo.stateTargetUserId);
  if (!shooter) {
    error('handleShield: shooter not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponse);
  }

  shooter.character.stateInfo.setState(shooter.id, CharacterStateType.NONE, null);
  responseSuccess(socket, version, sequence, CardType.SHIELD, [user, shooter], room, user, shooter.id);
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

  user.character.stateInfo.setState(targetUser.id, CharacterStateType.DEATH_MATCH, null);
  targetUser.character.stateInfo.setState(user.id, CharacterStateType.DEATH_MATCH_TURN, onDeathMatchTurnTimeout(user, targetUser, room));

  responseSuccess(socket, version, sequence, CardType.DEATH_MATCH, [user, targetUser], room, user, targetUser.id);
}

function handleBigBBang({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.stateInfo.setState(user.id, CharacterStateType.BIG_BBANG_SHOOTER, onBBangTimeoutShooter(user, room));

  room.users.forEach((targetUser) => {
    user.id !== targetUser.id &&
      targetUser.character.stateInfo.setState(user.id, CharacterStateType.BIG_BBANG_TARGET, onBBangTimeoutTarget(1, targetUser, room));
  });

  responseSuccess(socket, version, sequence, CardType.BIG_BBANG, room.users, room, user, '');
}

function handleVaccine({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  Character.recover(1, user.character);

  responseSuccess(socket, version, sequence, CardType.VACCINE, [user], room, user, '');
}

function handleCall119({ socket, version, sequence }: HandlerBase, useCardRequest: C2SUseCardRequest, room: Room, user: User) {
  if (useCardRequest.targetUserId === user.id) {
    Character.recover(1, user.character);
  } else {
    room.users.forEach((targetUser) => {
      targetUser.id !== user.id && Character.recover(1, targetUser.character);
    });
  }

  responseSuccess(socket, version, sequence, CardType.CALL_119, room.users, room, user, '');
}

function handleGuerrilla({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  room.users.forEach((targetUser) => {
    user.id !== targetUser.id
      ? targetUser.character.stateInfo.setState(user.id, CharacterStateType.GUERRILLA_TARGET, onGuerillaTargetTimeout(targetUser, room))
      : user.character.stateInfo.setState(user.id, CharacterStateType.GUERRILLA_SHOOTER, onGuerillaShooterTimeout(user, room));
  });

  responseSuccess(socket, version, sequence, CardType.GUERRILLA, room.users, room, user, '');
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

  user.character.stateInfo.setState(useCardRequest.targetUserId, CharacterStateType.ABSORBING, null);
  targetUser.character.stateInfo.setState(user.id, CharacterStateType.ABSORB_TARGET, null);

  responseSuccess(socket, version, sequence, CardType.ABSORB, [user, targetUser], room, user, targetUser.id);
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

  user.character.stateInfo.setState(useCardRequest.targetUserId, CharacterStateType.HALLUCINATING, null);
  targetUser.character.stateInfo.setState(user.id, CharacterStateType.HALLUCINATION_TARGET, null);

  responseSuccess(socket, version, sequence, CardType.HALLUCINATION, [user, targetUser], room, user, targetUser.id);
}

function handleFleaMarket({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  room.initFleaMarketCards();

  room.users.forEach((user, index) => {
    const state = index === 0 ? CharacterStateType.FLEA_MARKET_TURN : CharacterStateType.FLEA_MARKET_WAIT;
    const timeout = state === CharacterStateType.FLEA_MARKET_TURN ? onFleaMarketTurnTimeout(user, room) : null;
    user.character.stateInfo.setState(user.id, state, timeout);
  });

  room.broadcast(PACKET_TYPE.FLEA_MARKET_NOTIFICATION, {
    cardTypes: room.fleaMarketCards,
    pickIndex: room.pickFleaMarketIndex,
  } satisfies MessageProps<S2CFleaMarketNotification>);

  responseSuccess(socket, version, sequence, CardType.FLEA_MARKET, room.users, room, user, '');
}

function handleMaturedSavings({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.acquireCard({ type: pickRandomCardType(), count: 1 });
  user.character.acquireCard({ type: pickRandomCardType(), count: 1 });

  responseSuccess(socket, version, sequence, CardType.MATURED_SAVINGS, [user], room, user, '');
}

function handleSniperGun({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.weapon = CardType.SNIPER_GUN;
  responseSuccess(socket, version, sequence, CardType.SNIPER_GUN, [user], room, user, '');
}

function handleHandGun({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.weapon = CardType.HAND_GUN;
  responseSuccess(socket, version, sequence, CardType.HAND_GUN, [user], room, user, '');
}

function handleDesertEagle({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.weapon = CardType.DESERT_EAGLE;
  responseSuccess(socket, version, sequence, CardType.DESERT_EAGLE, [user], room, user, '');
}

function handleAutoRifle({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.weapon = CardType.AUTO_RIFLE;
  responseSuccess(socket, version, sequence, CardType.AUTO_RIFLE, [user], room, user, '');
}

function handleWinLottery({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.acquireCard({ type: pickRandomCardType(), count: 1 });
  user.character.acquireCard({ type: pickRandomCardType(), count: 1 });
  user.character.acquireCard({ type: pickRandomCardType(), count: 1 });

  responseSuccess(socket, version, sequence, CardType.WIN_LOTTERY, [user], room, user, '');
}

function handleLaserPointer({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.equips.add(CardType.LASER_POINTER);
  responseSuccess(socket, version, sequence, CardType.LASER_POINTER, [user], room, user, '');
}

function handleRadar({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.equips.add(CardType.RADAR);
  responseSuccess(socket, version, sequence, CardType.RADAR, [user], room, user, '');
}

function handleAutoShield({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.equips.add(CardType.AUTO_SHIELD);
  responseSuccess(socket, version, sequence, CardType.AUTO_SHIELD, [user], room, user, '');
}

function handleStealthSuit({ socket, version, sequence }: HandlerBase, room: Room, user: User) {
  user.character.equips.add(CardType.STEALTH_SUIT);
  responseSuccess(socket, version, sequence, CardType.STEALTH_SUIT, [user], room, user, '');
}

function handleContainmentUnit({ socket, version, sequence }: HandlerBase, useCardRequest: C2SUseCardRequest, room: Room, user: User) {
  const targetUser = room.getUser(useCardRequest.targetUserId);

  if (!targetUser) {
    error('handleContainmentUnit: target user not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponse);
  }

  targetUser.character.debuffs.add(CardType.CONTAINMENT_UNIT);
  room.gameEvents.containedUsers.push(targetUser);
  responseSuccess(socket, version, sequence, CardType.CONTAINMENT_UNIT, [user, targetUser], room, user, targetUser.id);
}

function handleSatelliteTarget({ socket, version, sequence }: HandlerBase, useCardRequest: C2SUseCardRequest, room: Room, user: User) {
  const targetUser = room.getUser(useCardRequest.targetUserId);

  if (!targetUser) {
    error('handleSatelliteTarget: target user not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponse);
  }

  targetUser.character.debuffs.add(CardType.SATELLITE_TARGET);
  room.gameEvents.satelliteTargets.push(targetUser);
  responseSuccess(socket, version, sequence, CardType.SATELLITE_TARGET, [user, targetUser], room, user, targetUser.id);
}

function handleBomb({ socket, version, sequence }: HandlerBase, useCardRequest: C2SUseCardRequest, room: Room, user: User) {
  const targetUser = room.getUser(useCardRequest.targetUserId);

  if (!targetUser) {
    error('handleBomb: target user not found');

    return writePayload(socket, PACKET_TYPE.USE_CARD_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies UseCardResponse);
  }

  targetUser.character.debuffs.add(CardType.BOMB);
  room.bombStates.push({ userId: targetUser.id, expectedAt: Date.now() + 30 * 1000, isWarningSend: false }); // TODO
  responseSuccess(socket, version, sequence, CardType.BOMB, [user, targetUser], room, user, targetUser.id);
}

export function handleDestroyCard(socket: Socket, version: string, sequence: number, cardDestroyRequest: C2SDestroyCardRequest, ctx: Context) {
  const room = rooms.getRoom(ctx.roomId);

  if (!room) {
    error('handleDestroyCard: room not found');
    return writePayload(socket, PACKET_TYPE.DESTROY_CARD_RESPONSE, version, sequence, {
      handCards: [],
    } satisfies MessageProps<S2CDestroyCardResponse>);
  }

  const user = room.getUser(ctx.userId);

  if (!user) {
    error('handleDestroyCard: user not found');
    return writePayload(socket, PACKET_TYPE.DESTROY_CARD_RESPONSE, version, sequence, {
      handCards: [],
    } satisfies MessageProps<S2CDestroyCardResponse>);
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

export function handlePassDebuff(socket: Socket, version: string, sequence: number, passDebuffRequest: C2SPassDebuffRequest, ctx: Context) {
  const room = rooms.getRoom(ctx.roomId);

  if (!room) {
    error('handlePassDebuff: room not found');
    return writePayload(socket, PACKET_TYPE.PASS_DEBUFF_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.ROOM_NOT_FOUND,
    } satisfies MessageProps<S2CPassDebuffResponse>);
  }

  const user = room.getUser(ctx.userId);

  if (!user) {
    error('handlePassDebuff: user not found');
    return writePayload(socket, PACKET_TYPE.PASS_DEBUFF_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies MessageProps<S2CPassDebuffResponse>);
  }

  const targetUser = room.getUser(passDebuffRequest.targetUserId);

  if (!targetUser) {
    error('handlePassDebuff: target user not found');
    return writePayload(socket, PACKET_TYPE.PASS_DEBUFF_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies MessageProps<S2CPassDebuffResponse>);
  }

  if (!user.character.debuffs.has(passDebuffRequest.debuffCardType)) {
    error('handlePassDebuff: user has no debuff card');
    return writePayload(socket, PACKET_TYPE.PASS_DEBUFF_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NO_CARD,
    } satisfies MessageProps<S2CPassDebuffResponse>);
  }

  user.character.debuffs.delete(passDebuffRequest.debuffCardType);
  targetUser.character.debuffs.add(passDebuffRequest.debuffCardType);

  switch (passDebuffRequest.debuffCardType) {
    case CardType.BOMB:
      const bombIndex = room.bombStates.findIndex((bombStat) => bombStat.userId === targetUser.id);
      if (bombIndex < 0) {
        return writePayload(socket, PACKET_TYPE.PASS_DEBUFF_RESPONSE, version, sequence, {
          success: false,
          failCode: GlobalFailCode.CHARACTER_STATE_ERROR,
        } satisfies MessageProps<S2CPassDebuffResponse>);
      }

      room.bombStates[bombIndex].userId = targetUser.id;

      writePayload(socket, PACKET_TYPE.PASS_DEBUFF_RESPONSE, version, sequence, {
        success: true,
        failCode: GlobalFailCode.NONE,
      } satisfies MessageProps<S2CPassDebuffResponse>);

      room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
        user: [user.toUserData(user.id), targetUser.toUserData(targetUser.id)],
      } satisfies MessageProps<S2CUserUpdateNotification>);
      break;

    default:
      error('handlePassDebuff: invalid debuff type');
      return writePayload(socket, PACKET_TYPE.PASS_DEBUFF_RESPONSE, version, sequence, {
        success: false,
        failCode: GlobalFailCode.INVALID_REQUEST,
      } satisfies MessageProps<S2CPassDebuffResponse>);
  }
}
