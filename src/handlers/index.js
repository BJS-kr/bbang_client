import protobuf from 'protobufjs';
import CustomError from '../utils/error/customError.js';
import { config } from '../config/config.js';
import { PACKET_TYPE } from '../constants/packetType.js';
import { registerRequestHandler, loginRequestHandler } from './authHandler.js';
import { createRoomRequestHandler, joinRoomRequestHandler, joinRandomRoomRequestHandler, leaveRoomRequestHandler } from './roomHandler.js';
import { gameStartRequestHandler, positionUpdateRequestHandler, useCardRequestHandler } from './gameHandler.js';

export const routes = {
  [PACKET_TYPE.REGISTER_REQUEST]: {
    requestType: 'C2SRegisterRequest',
    payloadKey: 'registerRequest',
    handler: registerRequestHandler,
  },
  [PACKET_TYPE.REGISTER_RESPONSE]: {
    requestType: 'S2CRegisterResponse',
    payloadKey: 'registerResponse',
  },
  [PACKET_TYPE.LOGIN_REQUEST]: {
    requestType: 'C2SLoginRequest',
    payloadKey: 'loginRequest',
    handler: loginRequestHandler,
  },
  [PACKET_TYPE.LOGIN_RESPONSE]: {
    requestType: 'S2CLoginResponse',
    payloadKey: 'loginResponse',
  },
  [PACKET_TYPE.CREATE_ROOM_REQUEST]: {
    requestType: 'C2SCreateRoomRequest',
    payloadKey: 'createRoomRequest',
    handler: createRoomRequestHandler,
  },
  [PACKET_TYPE.CREATE_ROOM_RESPONSE]: {
    requestType: 'S2CCreateRoomResponse',
    payloadKey: 'createRoomResponse',
  },
  [PACKET_TYPE.JOIN_ROOM_REQUEST]: {
    requestType: 'C2SJoinRoomRequest',
    payloadKey: 'joinRoomRequest',
    handler: joinRoomRequestHandler,
  },
  [PACKET_TYPE.JOIN_ROOM_RESPONSE]: {
    requestType: 'S2CJoinRoomResponse',
    payloadKey: 'joinRoomResponse',
  },
  [PACKET_TYPE.JOIN_RANDOM_ROOM_REQUEST]: {
    requestType: 'C2SJoinRandomRoomRequest',
    payloadKey: 'randomRoomRequest',
    handler: joinRandomRoomRequestHandler,
  },
  [PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE]: {
    requestType: 'S2CJoinRandomRoomResponse',
    payloadKey: 'randomRoomResponse',
  },
  [PACKET_TYPE.JOIN_ROOM_NOTIFICATION]: {
    requestType: 'S2CJoinRoomNotification',
    payloadKey: 'joinRoomNotification',
  },
  [PACKET_TYPE.LEAVE_ROOM_REQUEST]: {
    requestType: 'C2SLeaveRoomRequest',
    payloadKey: 'leaveRoomRequest',
    handler: leaveRoomRequestHandler,
  },
  [PACKET_TYPE.LEAVE_ROOM_RESPONSE]: {
    requestType: 'S2CLeaveRoomResponse',
    payloadKey: 'leaveRoomResponse',
  },
  [PACKET_TYPE.LEAVE_ROOM_NOTIFICATION]: {
    requestType: 'S2CLeaveRoomNotification',
    payloadKey: 'leaveRoomNotification',
  },
  [PACKET_TYPE.GAME_START_REQUEST]: {
    requestType: 'C2SGameStartRequest',
    payloadKey: 'gameStartRequest',
    handler: gameStartRequestHandler,
  },
  [PACKET_TYPE.GAME_START_NOTIFICATION]: {
    requestType: 'S2CGameStartNotification',
    payloadKey: 'gameStartNotification',
  },
  [PACKET_TYPE.POSITION_UPDATE_REQUEST]: {
    requestType: 'C2SPositionUpdateRequest',
    payloadKey: 'positionUpdateRequest',
    handler: positionUpdateRequestHandler,
  },
  [PACKET_TYPE.POSITION_UPDATE_NOTIFICATION]: {
    requestType: 'S2CPositionUpdateNotification',
    payloadKey: 'positionUpdateNotification',
  },
  [PACKET_TYPE.USE_CARD_NOTIFICATION]: {
    requestType: 'S2CUseCardNotification',
    payloadKey: 'useCardNotification',
  },
  [PACKET_TYPE.USE_CARD_REQUEST]: {
    requestType: 'C2SUseCardRequest',
    payloadKey: 'useCardRequest',
    handler: useCardRequestHandler,
  },
  [PACKET_TYPE.PHASE_UPDATE_NOTIFICATION]: {
    requestType: 'S2CPhaseUpdateNotification',
    payloadKey: 'phaseUpdateNotification',
  },
  [PACKET_TYPE.GAME_END_NOTIFICATION]: {
    requestType: 'S2CGameEndNotification',
    payloadKey: 'gameEndNotification',
  },
};

export const createPacket = (packetType, version, sequence, payloadBuffer) => {
  // packetType (2바이트)
  const packetTypeBuffer = Buffer.alloc(config.packet.typeLength);
  packetTypeBuffer.writeUInt16BE(packetType, 0);

  // version 길이 및 문자열
  const versionBuffer = Buffer.from(version, 'utf8');
  const versionLengthBuffer = Buffer.alloc(config.packet.versionLengthSize);
  versionLengthBuffer.writeUInt8(versionBuffer.length, 0);

  // sequence (4바이트)
  const sequenceBuffer = Buffer.alloc(config.packet.sequenceLength);
  sequenceBuffer.writeUInt32BE(sequence, 0);

  // 페이로드 길이 (4바이트)
  const payloadLengthBuffer = Buffer.alloc(config.packet.payloadLengthSize);
  payloadLengthBuffer.writeUInt32BE(payloadBuffer.length, 0);

  // 전체 패킷 구성
  return Buffer.concat([packetTypeBuffer, versionLengthBuffer, versionBuffer, sequenceBuffer, payloadLengthBuffer, payloadBuffer]);
};

const protoRoot = protobuf.loadSync('./src/protobuf/game.proto');
const GamePacket = protoRoot.lookupType('GamePacket');

export const encodePayload = (packetType, payload) => {
  const packetInfo = routes[packetType];

  if (!packetInfo) {
    throw new CustomError(ErrorCodes.INVALID_PACKET, `알 수 없는 패킷 타입: ${packetType}`);
  }

  const { requestType, payloadKey } = routes[packetType];
  const payloadType = protoRoot.lookupType(requestType);
  const responseMessage = payloadType.create(payload);

  const response = GamePacket.create({
    [payloadKey]: responseMessage,
  });

  return GamePacket.encode(response).finish();
};

export const decodePayload = (packetType, payloadBuffer) => {
  const packetInfo = routes[packetType];
  if (!packetInfo) {
    throw new CustomError(ErrorCodes.INVALID_PACKET, `알 수 없는 패킷 타입: ${packetType}`);
  }

  const payload = GamePacket.decode(payloadBuffer);
  const { payloadKey } = routes[packetType];

  return payload[payloadKey];
};
