import { RoomState } from '../rooms/types';
import { CARD_TYPE, CHARACTER_TYPE, CharacterState, GAME_INIT_POSITION, PHASE_TYPE, ROLE_TYPE } from '../constants/game';
import { PACKET_TYPE } from '../constants/packetType';
import {
  GlobalFailCode,
  S2CGamePrepareNotification,
  S2CGamePrepareResponse,
  S2CGameStartNotification,
  S2CGameStartResponse,
  S2CPositionUpdateNotification,
  S2CPositionUpdateResponse,
  S2CReactionResponse,
} from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { writePayload } from '../protobuf/writePayload';
import { rooms } from '../rooms/rooms';
import { Context } from '../events/types';
import { session } from '../users/session';
import { createCharacter } from '../characters/createCharacter';
import { pickRandomCardType } from '../cards/pickRandomCard';
import { log, error } from '../utils/logger';

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

  // TODO 리액션 종류 추가되면 그때 분기처리...

  if (user.character.stateInfo.state === CharacterState.NONE) {
    return writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_STATE_ERROR,
    } satisfies MessageProps<S2CReactionResponse>);
  }

  user.character.stateInfo.setState(user.id, CharacterState.NONE, null);
  return writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE,
  } satisfies MessageProps<S2CReactionResponse>);
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
