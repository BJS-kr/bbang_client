import { RoomState } from '../rooms/types';
import { CARD_TYPE, CHARACTER_TYPE, GAME_INIT_POSITION, PHASE_TYPE, ROLE_TYPE } from '../constants/game';
import { PACKET_TYPE } from '../constants/packetType';
import {
  GlobalFailCode,
  S2CGamePrepareNotification,
  S2CGamePrepareResponse,
  S2CGameStartNotification,
  S2CGameStartResponse,
  S2CPhaseUpdateNotification,
  S2CPositionUpdateNotification,
  S2CPositionUpdateResponse,
  UserData,
} from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { writePayload } from '../utils/writePayload';
import { rooms } from '../rooms/rooms';
import { Context } from '../events/types';
import { session } from '../users/session';
import { config } from '../config/config';
import { createCharacter } from '../characters/createCharacter';
import { CardProps, CharacterState } from '../characters/character';

// TODO
const TARGET_CARD_BONUS = 1;
const DAILY_CARD_COUNT = 2;
const cardTypes = Object.values(CARD_TYPE);

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

  if (room.state !== RoomState.WAIT || room.users.length < 4) {
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

  // 역할, 캐릭터, 초기 위치 셔플
  const shuffleCharacters = Object.values(CHARACTER_TYPE).sort(() => Math.random() - 0.5);
  const shuffleRoles = Object.values(ROLE_TYPE).sort(() => Math.random() - 0.5);
  const suhfflePositions = [...GAME_INIT_POSITION].sort(() => Math.random() - 0.5);

  // 역할, 캐릭터, 초기 위치 부여
  for (let i = 0; i < room.users.length; i++) {
    const characterType = shuffleCharacters[i] as number;
    const roleType = shuffleRoles[i] as number;
    room.users[i].character = createCharacter({ characterType, roleType });
    room.users[i].character.position = suhfflePositions[i];
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
  if (!user) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
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
      const card = createRandCard();
      user.character.acquireCard(card);
    }
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
    } satisfies MessageProps<S2CGameStartNotification>);
  });

  console.log(`[GameStart] roomId: ${ctx.roomId}`);
};

export const positionUpdateRequestHandler = async (socket, version, sequence, positionUpdateRequest, ctx: Context) => {
  const { x, y } = positionUpdateRequest;
  const user = session.getUser(ctx.userId);
  if (!user) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  if (room.state !== RoomState.IN_GAME) {
    return writePayload(socket, PACKET_TYPE.POSITION_UPDATE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    });
  }

  const roomUser = room.users.find((user) => user.id === ctx.userId);
  if (!roomUser) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  if (roomUser.character.stateInfo.state !== CharacterState.NONE) {
    return writePayload(socket, PACKET_TYPE.POSITION_UPDATE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    });
  }

  roomUser.character.position = { x, y };
  writePayload(socket, PACKET_TYPE.POSITION_UPDATE_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies MessageProps<S2CPositionUpdateResponse>);

  writePayload(socket, PACKET_TYPE.POSITION_UPDATE_NOTIFICATION, version, sequence, {
    userId: ctx.userId,
    position: roomUser.character.position,
  } satisfies MessageProps<S2CPositionUpdateNotification>);
};

const onPhaseChange = (roomId, phaseType, nextPhaseAt) => {
  console.log(`[onPhaseChange] roomId: ${roomId}, phaseType:${phaseType}`);

  const room = rooms.getRoom(roomId);
  if (!room) {
    console.error(`[onPhaseChange] Cannot find room:${roomId}`);
    return;
  }

  switch (phaseType) {
    case PHASE_TYPE.DAY:
      const suhfflePositions = [...GAME_INIT_POSITION].sort(() => Math.random() - 0.5);
      room.users.forEach((user, index) => {
        user.character.position = suhfflePositions[index];
        const removeCount = getTotalCardCount(user) - user.character.hp;
        if (removeCount > 0) {
          // 1. 초과 카드 대신 버리기
          removeRandCard(user, removeCount);
        }
        // 2. 데일리 카드 주기
        for (let i = 0; i < DAILY_CARD_COUNT; i++) {
          const card = createRandCard();
          user.character.acquireCard(card);
        }
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
    if (user.id === userData.userId) {
      handCards = userData.handCards;
    }

    return { ...userData, roleType, handCards } satisfies MessageProps<UserData>;
  });

  return result;
}

function createRandCard(): CardProps {
  const type = Math.floor(Math.random() * cardTypes.length);
  return { type, count: 1 };
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
