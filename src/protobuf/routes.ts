import { PACKET_TYPE } from '../constants/packetType';
import { registerRequestHandler, loginRequestHandler } from '../users/user.handler';
import { createRoomRequestHandler, joinRoomRequestHandler, joinRandomRoomRequestHandler, leaveRoomRequestHandler } from '../rooms/roomHandler';
import { gameStartRequestHandler, positionUpdateRequestHandler, useCardRequestHandler } from '../handlers/gameHandler';

export const protoRoutes = {
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
} as const;
