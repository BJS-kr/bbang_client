import { RoomState } from '../rooms/types';
import { CARD_TYPE, CHARACTER_TYPE, CharacterState, GAME_INIT_POSITION, PHASE_TYPE, ROLE_TYPE } from '../constants/game';
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
  S2CUserUpdateNotification,
} from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { writePayload } from '../protobuf/writePayload';
import { rooms } from '../rooms/rooms';
import { Context } from '../events/types';
import { session } from '../users/session';
import { config } from '../config/config';
import { createCharacter } from '../characters/createCharacter';
import { CardProps } from '../characters/character';

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
  const shuffleRoles = Object.values(ROLE_TYPE).sort(() => Math.random() - 0.5);
  const suhfflePositions = [...GAME_INIT_POSITION].sort(() => Math.random() - 0.5);
  const shuffleCharacters = Object.values(CHARACTER_TYPE)
    .filter((type) => typeof type === 'number' && type !== CHARACTER_TYPE.NONE) // TODO 이게 맞아..?
    .sort(() => Math.random() - 0.5);

  // 역할, 캐릭터, 초기 위치 부여
  for (let i = 0; i < room.users.length; i++) {
    const characterType = Number(shuffleCharacters[i]);
    const roleType = Number(shuffleRoles[i]);
    room.users[i].character = createCharacter({ userId: room.users[i].id, characterType, roleType });
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

  console.log(`[GamePrepare] roomId: ${ctx.roomId}`);
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
    console.log(`[GAME_START_FAIL] ${ctx.roomId}, ${room.state}, ${room.ownerId}`);
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_ROOM_STATE,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  if (user.userId !== room.ownerId) {
    console.log(`[GAME_START_FAIL] ${user.userId}, ${room.ownerId}`);
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
  writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies MessageProps<S2CGameStartResponse>);

  // 게임 시작 알림
  room.users.forEach((user) => {
    writePayload(user.socket, PACKET_TYPE.GAME_START_NOTIFICATION, version, 0, {
      gameState: room.gameState,
      users: createUserDataView(user, room.users),
    } satisfies MessageProps<S2CGameStartNotification>);
  });

  console.log(`[GameStart] roomId: ${ctx.roomId}`);
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

  roomUser.character.position = { x, y };
  writePayload(socket, PACKET_TYPE.POSITION_UPDATE_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies MessageProps<S2CPositionUpdateResponse>);

  room.broadcast(PACKET_TYPE.POSITION_UPDATE_NOTIFICATION, {
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
        const handCards = user.character.getHandCards();
        const removeCount = handCards.length - user.character.hp;
        if (removeCount > 0) {
          // 1. 초과 카드 대신 버리기
          user.character.loseRandomCards(removeCount);
        }
        // 2. 데일리 카드 주기
        for (let i = 0; i < DAILY_CARD_COUNT; i++) {
          const card = createRandCard();
          user.character.acquireCard(card);
        }
        writePayload(user.socket, PACKET_TYPE.USER_UPDATE_NOTIFICATION, config.client.version, 0, {
          user: [user.toUserData(user.id)],
        } satisfies MessageProps<S2CUserUpdateNotification>);
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
  const result = userDatas.map((userData) => ({
    id: userData.id,
    nickname: userData.nickname,
    character: userData.character.toCharacterData(user.id),
  }));
  return result;
}

function createRandCard(): CardProps {
  const type = Math.floor(Math.random() * cardTypes.length);
  return { type, count: 1 };
}
