import { RoomState } from '../rooms/types';
import { CARD_TYPE, CHARACTER_TYPE, CharacterState, GAME_INIT_POSITION, PHASE_TYPE, ROLE_TYPE } from '../constants/game';
import { PACKET_TYPE } from '../constants/packetType';
import {
  GlobalFailCode,
  S2CFleaMarketNotification,
  S2CFleaMarketPickResponse,
  S2CGamePrepareNotification,
  S2CGamePrepareResponse,
  S2CGameStartNotification,
  S2CGameStartResponse,
  S2CPositionUpdateNotification,
  S2CPositionUpdateResponse,
  S2CReactionResponse,
  S2CUserUpdateNotification,
} from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { writePayload } from '../protobuf/writePayload';
import { rooms } from '../rooms/rooms';
import { Context } from '../events/types';
import { session } from '../users/session';
import { createCharacter } from '../characters/createCharacter';
import { log, error } from '../utils/logger';
import { UserUpdateNotification } from '../cards/utils/types';
import { pickRandomCardType } from '../cards/utils/helpers';
// TODO
const TARGET_CARD_BONUS = 1;

export const gamePrepareRequestHandler = async (socket, version, sequence, gamePrepareRequest, ctx: Context) => {
  const user = session.getUser(ctx.userId);
  if (!user) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  // TODO || room.users.length < 4
  if (room.state !== RoomState.WAIT) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  if (user.userId !== room.ownerId) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  const roles = [ROLE_TYPE.TARGET, ROLE_TYPE.BODYGUARD, ROLE_TYPE.HITMAN, ROLE_TYPE.PSYCHOPATH];
  const additionalRoles = [ROLE_TYPE.BODYGUARD, ROLE_TYPE.HITMAN, ROLE_TYPE.PSYCHOPATH];
  const addRoleCount = room.users.length - roles.length;

  // 인원이 4명 이상일 경우 역할 추가
  for (let i = 0; i < addRoleCount; i++) {
    const randNum = Math.floor(Math.random() * additionalRoles.length);
    roles.push(additionalRoles[randNum]);
  }

  // 역할, 초기 위치, 캐릭터 셔플
  const shuffleRoles = Object.values(ROLE_TYPE)
    .filter((type) => typeof type === 'number' && type !== ROLE_TYPE.NONE)
    .sort(() => Math.random() - 0.5);
  const suhfflePositions = [...GAME_INIT_POSITION].sort(() => Math.random() - 0.5);
  const shuffleCharacters = Object.values(CHARACTER_TYPE)
    .filter((type) => typeof type === 'number' && type !== CHARACTER_TYPE.NONE)
    .sort(() => Math.random() - 0.5);

  // 역할, 캐릭터, 초기 위치 부여
  for (let i = 0; i < room.users.length; i++) {
    const characterType = shuffleCharacters[i];
    const roleType = shuffleRoles[i];

    // ROLE_TYPE.NONE || CHARACTER_TYPE.NONE || falsy
    if (!characterType || !roleType) {
      throw new Error('characterType or roleType is not defined');
    }

    room.users[i].character = createCharacter({ userId: room.users[i].id, characterType, roleType });
    room.users[i].character.setPosition(suhfflePositions[i]);
  }

  // 상태 변경
  room.state = RoomState.PREPARE;

  // 게임 준비 응답
  const responsePayload: MessageProps<S2CGamePrepareResponse> = {
    success: true,
    failCode: GlobalFailCode.NONE,
  };
  writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, responsePayload);

  // 게임 준비 알림
  room.users.forEach((user) => {
    writePayload(user.socket, PACKET_TYPE.GAME_PREPARE_NOTIFICATION, version, 0, {
      room: {
        id: ctx.roomId,
        name: room.name,
        ownerId: room.ownerId,
        maxUserNum: room.maxUserNum,
        state: room.state,
        users: createUserDataView(user, room.users),
      },
    } satisfies MessageProps<S2CGamePrepareNotification>);
  });

  log(`[GamePrepare] roomId: ${ctx.roomId}`);
};

export const gameStartRequestHandler = async (socket, version, sequence, gameStartRequest, ctx: Context) => {
  const user = session.getUser(ctx.userId);
  if (!user) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.AUTHENTICATION_FAILED,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.ROOM_NOT_FOUND,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  if (room.state !== RoomState.PREPARE) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_ROOM_STATE,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  if (user.userId !== room.ownerId) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  room.users.forEach((user) => {
    user.character.handCards.clear();

    let initCardCount = user.character.hp;
    if (user.character.roleType === ROLE_TYPE.TARGET) {
      initCardCount += TARGET_CARD_BONUS;
    }

    for (let i = 0; i < initCardCount; i++) {
      const card = { type: pickRandomCardType(), count: 1 };
      user.character.acquireCard(card);
    }
  });

  // TODO 테스트용. 지워야함!!!!!!!!!!!
  room.users.forEach((user) => {
    const testHandCards = new Map();

    testHandCards.set(CARD_TYPE.BBANG, 1);
    testHandCards.set(CARD_TYPE.BIG_BBANG, 1);
    testHandCards.set(CARD_TYPE.SHIELD, 1);
    testHandCards.set(CARD_TYPE.VACCINE, 1);
    testHandCards.set(CARD_TYPE.CALL_119, 1);
    testHandCards.set(CARD_TYPE.DEATH_MATCH, 1);
    testHandCards.set(CARD_TYPE.GUERRILLA, 1);
    testHandCards.set(CARD_TYPE.DEATH_MATCH, 1);
    testHandCards.set(CARD_TYPE.GUERRILLA, 1);
    testHandCards.set(CARD_TYPE.ABSORB, 1);
    testHandCards.set(CARD_TYPE.HALLUCINATION, 1);
    testHandCards.set(CARD_TYPE.FLEA_MARKET, 1);
    testHandCards.set(CARD_TYPE.MATURED_SAVINGS, 1);
    testHandCards.set(CARD_TYPE.WIN_LOTTERY, 1);
    testHandCards.set(CARD_TYPE.SNIPER_GUN, 1);
    testHandCards.set(CARD_TYPE.HAND_GUN, 1);
    testHandCards.set(CARD_TYPE.DESERT_EAGLE, 1);
    testHandCards.set(CARD_TYPE.AUTO_RIFLE, 1);
    testHandCards.set(CARD_TYPE.LASER_POINTER, 1);
    testHandCards.set(CARD_TYPE.RADAR, 1);
    testHandCards.set(CARD_TYPE.AUTO_SHIELD, 1);
    testHandCards.set(CARD_TYPE.STEALTH_SUIT, 1);
    testHandCards.set(CARD_TYPE.CONTAINMENT_UNIT, 1);
    testHandCards.set(CARD_TYPE.SATELLITE_TARGET, 1);
    testHandCards.set(CARD_TYPE.BOMB, 1);

    user.character.handCards = testHandCards;
  });
  // TODO 테스트용. 여기까지 지워야함!!!!!!!!!!!

  room.state = RoomState.IN_GAME;
  room.setTimer();

  // 게임 시작 응답
  writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies MessageProps<S2CGameStartResponse>);

  // 게임 시작 알림
  room.users.forEach((user) => {
    writePayload(user.socket, PACKET_TYPE.GAME_START_NOTIFICATION, version, 0, {
      gameState: room.gameState.toGameStateData(),
      users: createUserDataView(user, room.users),
      characterPositions: room.users.map((user) => user.character.positionInfo.toPositionData()),
    } satisfies MessageProps<S2CGameStartNotification>);
  });

  log(`[GameStart] roomId: ${ctx.roomId}`);
};

export const positionUpdateRequestHandler = async (socket, version, sequence, positionUpdateRequest, ctx: Context) => {
  const { x, y } = positionUpdateRequest;
  const user = session.getUser(ctx.userId);
  if (!user) {
    return writePayload(socket, PACKET_TYPE.POSITION_UPDATE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CPositionUpdateResponse>);
  }

  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
    return writePayload(socket, PACKET_TYPE.POSITION_UPDATE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CPositionUpdateResponse>);
  }

  if (room.state !== RoomState.IN_GAME) {
    return writePayload(socket, PACKET_TYPE.POSITION_UPDATE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    });
  }

  const roomUser = room.users.find((user) => user.id === ctx.userId);
  if (!roomUser) {
    return writePayload(socket, PACKET_TYPE.POSITION_UPDATE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CPositionUpdateResponse>);
  }

  if (roomUser.character.stateInfo.state !== CharacterState.NONE) {
    return writePayload(socket, PACKET_TYPE.POSITION_UPDATE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    });
  }

  roomUser.character.setPosition({ x, y });
  writePayload(socket, PACKET_TYPE.POSITION_UPDATE_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies MessageProps<S2CPositionUpdateResponse>);

  room.broadcast(PACKET_TYPE.POSITION_UPDATE_NOTIFICATION, {
    characterPositions: room.users.map((user) => user.character.positionInfo.toPositionData()),
  } satisfies MessageProps<S2CPositionUpdateNotification>);
};

export const reactionHandler = async (socket, version, sequence, reactionRequest, ctx: Context) => {
  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
    return writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.ROOM_NOT_FOUND,
    } satisfies MessageProps<S2CReactionResponse>);
  }

  const user = room.getUser(ctx.userId);
  if (!user) {
    return writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies MessageProps<S2CReactionResponse>);
  }

  if (user.character.stateInfo.state === CharacterState.NONE) {
    return writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_STATE_ERROR,
    } satisfies MessageProps<S2CReactionResponse>);
  }

  switch (user.character.stateInfo.state) {
    case CharacterState.FLEA_MARKET_TURN:
      const remainCardTypes = room.fleaMarketCards.map((_, index) => index).filter((index) => !room.pickFleaMarketIndex.includes(index));
      if (remainCardTypes.length <= 0) {
        return writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
          success: false,
          failCode: GlobalFailCode.INVALID_REQUEST,
        } satisfies MessageProps<S2CReactionResponse>);
      }

      const randomIndex = remainCardTypes[Math.floor(Math.random() * remainCardTypes.length)];
      user.character.acquireCard({ type: room.fleaMarketCards[randomIndex], count: 1 });
      room.pickFleaMarketIndex.push(randomIndex);

      room.broadcast(PACKET_TYPE.FLEA_MARKET_NOTIFICATION, {
        cardTypes: room.fleaMarketCards,
        pickIndex: room.pickFleaMarketIndex,
      } satisfies MessageProps<S2CFleaMarketNotification>);

      user.character.stateInfo.setState(user.id, CharacterState.FLEA_MARKET_WAIT, null);
      break;

    default:
      user.character.stateInfo.react(CharacterState.NONE);
      break;
  }

  writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies MessageProps<S2CReactionResponse>);

  room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: room.users.map((user) => user.toUserData(user.id)),
  } satisfies MessageProps<S2CUserUpdateNotification>);
};

export const fleaMarketPickHandler = async (socket, version, sequence, fleaMarketPickRequest, ctx: Context) => {
  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
    return writePayload(socket, PACKET_TYPE.FLEA_MARKET_PICK_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.ROOM_NOT_FOUND,
    } satisfies MessageProps<S2CFleaMarketPickResponse>);
  }

  const user = room.getUser(ctx.userId);
  if (!user) {
    return writePayload(socket, PACKET_TYPE.FLEA_MARKET_PICK_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies MessageProps<S2CFleaMarketPickResponse>);
  }

  if (user.character.stateInfo.state !== CharacterState.FLEA_MARKET_TURN) {
    return writePayload(socket, PACKET_TYPE.FLEA_MARKET_PICK_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_STATE_ERROR,
    } satisfies MessageProps<S2CFleaMarketPickResponse>);
  }

  const { pickIndex } = fleaMarketPickRequest;
  if (!room.fleaMarketCards[pickIndex] || room.pickFleaMarketIndex.includes(pickIndex)) {
    return writePayload(socket, PACKET_TYPE.FLEA_MARKET_PICK_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CFleaMarketPickResponse>);
  }

  user.character.stateInfo.setState(user.id, CharacterState.FLEA_MARKET_WAIT, null);
  user.character.acquireCard({ type: room.fleaMarketCards[pickIndex], count: 1 });
  room.pickFleaMarketIndex.push(pickIndex);

  writePayload(socket, PACKET_TYPE.FLEA_MARKET_PICK_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies MessageProps<S2CFleaMarketPickResponse>);

  room.broadcast(PACKET_TYPE.FLEA_MARKET_NOTIFICATION, {
    cardTypes: room.fleaMarketCards,
    pickIndex: room.pickFleaMarketIndex,
  } satisfies MessageProps<S2CFleaMarketNotification>);

  room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: room.users.map((user) => user.toUserData(user.id)),
  } satisfies MessageProps<UserUpdateNotification>);
};

function createUserDataView(user, userDatas) {
  log(`createUserDataView userId: ${user.id}`);
  const result = userDatas.map((userData) => ({
    id: userData.id,
    nickname: userData.nickname,
    character: userData.character.toCharacterData(user.id),
  }));
  return result;
}
