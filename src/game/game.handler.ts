import { FailCode } from '../constants/fail';
import { CHARACTER_TYPE, PHASE_TYPE, ROLE_TYPE, ROOM_STATE_TYPE } from '../constants/game';
import { PACKET_TYPE } from '../constants/packetType';
import { S2CGamePrepareNotification, S2CGamePrepareResponse, S2CGameStartResponse } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { writePayload } from '../utils/writePalyload';
import { rooms } from '../rooms/rooms';
import { GameState } from './game.state';
import { Context } from '../events/types';
import { session } from '../users/session';

export const gamePrepareRequestHandler = async (socket, version, sequence, gamePrepareRequest, ctx: Context) => {
  const user = session.getUser(ctx.userId);
  if (user === null) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: FailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  const room = rooms.getRoom(ctx.roomId);
  if (room === null) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: FailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  if (room.state !== ROOM_STATE_TYPE.WAIT) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: FailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  if (user.id !== room.ownerId) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: FailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  // 캐릭터 셔플 & 부여
  const shuffleCharacters = Object.values(CHARACTER_TYPE).sort(() => Math.random() - 0.5);
  for (let i = 0; i < room.users.length; i++) {
    room.users[i].characterType = shuffleCharacters[i];
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
    room.users[i].roleType = shuffleRoles[i];
  }

  const responsePayload: MessageProps<S2CGamePrepareResponse> = {
    success: true,
    failCode: FailCode.NONE,
  };

  writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, responsePayload);
  const notifyPayload: MessageProps<S2CGamePrepareNotification> = {
    users: room.users,
  };

  rooms.broadcast(room.users, PACKET_TYPE.GAME_PREPARE_NOTIFICATION, notifyPayload, version, sequence);
};

export const gameStartRequestHandler = async (socket, version, sequence, gameStartRequest, ctx: Context) => {
  const { id, password, email } = gameStartRequest;
  const room = rooms.getRoom(ctx.roomId); // TODO
  if (room == null) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: FailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  const gameState = new GameState(onPhaseChange);
  // 캐릭터 기본 능력치 반영
  // 체력 반영
  // 체력만큼 카드 배분
};

export const positionUpdateRequestHandler = async (socket, version, sequence, registerRequest) => {
  const { id, password, email } = registerRequest;

  // TODO
};

export const useCardRequestHandler = async (socket, version, sequence, registerRequest) => {
  const { id, password, email } = registerRequest;

  // TODO
};

const onPhaseChange = (phaseType) => {
  switch (phaseType) {
    case PHASE_TYPE.DAY:
      break;

    case PHASE_TYPE.EVENING:
      break;

    case PHASE_TYPE.END:
      break;
  }
};
