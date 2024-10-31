import { RoomState } from '../rooms/types';
import { CARD_TYPE, CHARACTER_HP, CHARACTER_TYPE, PHASE_TYPE, ROLE_TYPE, USER_STATE } from '../constants/game';
import { PACKET_TYPE } from '../constants/packetType';
import {
  GlobalFailCode,
  S2CGamePrepareNotification,
  S2CGamePrepareResponse,
  S2CGameStartNotification,
  S2CGameStartResponse,
  S2CPhaseUpdateNotification,
} from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { writePayload } from '../utils/writePayload';
import { rooms } from '../rooms/rooms';
import { Context } from '../events/types';
import { session } from '../users/session';
import { config } from '../config/config';

// TODO
const TARGET_CARD_COUNT = 1;
const DAILY_CARD_COUNT = 2;
const cardTypes = Object.values(CARD_TYPE);

export const gamePrepareRequestHandler = async (socket, version, sequence, gamePrepareRequest, ctx: Context) => {
  const user = session.getUser(ctx.userId);
  if (user === null) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  const room = rooms.getRoom(ctx.roomId);
  if (room === null) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  if (room.state !== RoomState.WAIT || room.users.length < 4) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  if (user.id !== room.ownerId) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  // 캐릭터 셔플 & 부여
  const shuffleCharacters = Object.values(CHARACTER_TYPE).sort(() => Math.random() - 0.5);
  for (let i = 0; i < room.users.length; i++) {
    room.users[i].characterType = shuffleCharacters[i] as number;
    room.users[i].hp = CHARACTER_HP[room.users[i].characterType];
  }

  const roles = [ROLE_TYPE.TARGET, ROLE_TYPE.BODYGUARD, ROLE_TYPE.HITMAN, ROLE_TYPE.PSYCHOPATH];
  const additionalRoles = [ROLE_TYPE.BODYGUARD, ROLE_TYPE.HITMAN, ROLE_TYPE.PSYCHOPATH];
  const addRoleCount = room.users.length - roles.length;

  // 인원이 4명 이상일 경우 역할 추가
  for (let i = 0; i < addRoleCount; i++) {
    const randNum = Math.floor(Math.random() * additionalRoles.length);
    roles.push(additionalRoles[randNum]);
  }

  // 역할 셔플 & 부여
  const shuffleRoles = Object.values(ROLE_TYPE).sort(() => Math.random() - 0.5);
  for (let i = 0; i < room.users.length; i++) {
    room.users[i].roleType = shuffleRoles[i] as number;
    if (room.users[i].roleType === ROLE_TYPE.TARGET) {
      room.users[i].hp += 1;
    }
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
      users: createUserDataView(user, room.users),
    } satisfies MessageProps<S2CGamePrepareNotification>);
  });

  console.log(`[GamePrepare] roomId: ${ctx.roomId}`);
};

export const gameStartRequestHandler = async (socket, version, sequence, gameStartRequest, ctx: Context) => {
  const user = session.getUser(ctx.userId);
  if (user === null) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  const room = rooms.getRoom(ctx.roomId);
  if (room === null) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  if (room.state !== RoomState.PREPARE) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  if (user.id !== room.ownerId) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  room.users.forEach((user) => {
    user.handCards = [];

    // 체력만큼 카드 분배
    addRandCard(user, user.hp);

    // 타겟은 카드 한장 더
    if (user.roleType === ROLE_TYPE.TARGET) {
      addRandCard(user, TARGET_CARD_COUNT);
    }

    // TODO 캐릭터 능력치 반영
  });

  room.state = RoomState.IN_GAME;
  room.gameState.gameStart(ctx.roomId, onPhaseChange);

  // 게임 시작 응답
  const responsePayload: MessageProps<S2CGameStartResponse> = {
    success: true,
    failCode: GlobalFailCode.NONE,
  };
  writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, responsePayload);

  // 게임 시작 알림
  room.users.forEach((user) => {
    writePayload(user.socket, PACKET_TYPE.GAME_START_NOTIFICATION, version, 0, {
      users: createUserDataView(user, room.users),
      userPositions: [], // TODO 인덱스에 따른 포지션 초기값
    } satisfies MessageProps<S2CGameStartNotification>);
  });

  console.log(`[GameStart] roomId: ${ctx.roomId}`);
};

const onPhaseChange = (roomId, phaseType, nextPhaseAt) => {
  console.log(`[onPhaseChange] roomId: ${roomId}, phaseType:${phaseType}`);

  const room = rooms.getRoom(roomId);
  if (room === null) {
    console.error(`[onPhaseChange] Cannot find room:${roomId}`);
    return;
  }

  switch (phaseType) {
    case PHASE_TYPE.DAY:
      room.users.forEach((user) => {
        const removeCount = getTotalCardCount(user) - user.hp;
        if (removeCount > 0) {
          // 1. 초과 카드 대신 버리기
          removeRandCard(user, removeCount);
        }
        // 2. 데일리 카드 주기
        addRandCard(user, DAILY_CARD_COUNT);

        // 알림
        writePayload(user.socket, PACKET_TYPE.USER_UPDATE_NOTIFICATION, config.client.version, 0, user);
      });
      break;

    case PHASE_TYPE.EVENING:
      break;

    case PHASE_TYPE.END:
      break;
  }

  const responsePayload: MessageProps<S2CPhaseUpdateNotification> = {
    phaseType: phaseType,
    nextPhaseAt: nextPhaseAt,
  };
  room.broadcast(PACKET_TYPE.PHASE_UPDATE_NOTIFICATION, responsePayload);
};

function createUserDataView(user, userDatas) {
  const result = userDatas.map((userData) => {
    let roleType = ROLE_TYPE.NONE as number;
    if (user.id === userData.id || userData.roleType === ROLE_TYPE.TARGET) {
      roleType = userData.roleType;
    }

    let handCards = [];
    if (user.id === userData.id) {
      handCards = userData.handCards;
    }

    return { ...userData, roleType, handCards };
  });

  return result;
}

function addRandCard(user, count = 1) {
  for (let i = 0; i < count; i++) {
    const randType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    const existCard = user.handCards.find((card) => card.type === randType);
    if (existCard) {
      existCard.count += 1;
      continue;
    }

    user.handCards.push({ type: randType, count: 1 });
  }
}

function getTotalCardCount(user) {
  const result = user.handCards.reduce((acc, card) => {
    acc += card.count;
    return acc;
  }, 0);

  return result;
}

function removeRandCard(user, count) {
  for (let i = 0; i < count; i++) {
    const randNum = Math.floor(Math.random() * user.handCards.length);
    if (user.handCards[randNum].count > 1) {
      user.handCards[randNum].count--;
      continue;
    }
    user.handCards.splice(randNum, 1);
  }
}
