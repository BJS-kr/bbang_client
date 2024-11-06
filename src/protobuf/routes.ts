import { PACKET_TYPE } from '../constants/packetType';

export const protoRoutes = {
  [PACKET_TYPE.REGISTER_REQUEST]: {
    requestType: 'C2SRegisterRequest',
    payloadKey: 'registerRequest',
  },
  [PACKET_TYPE.REGISTER_RESPONSE]: {
    requestType: 'S2CRegisterResponse',
    payloadKey: 'registerResponse',
  },
  [PACKET_TYPE.LOGIN_REQUEST]: {
    requestType: 'C2SLoginRequest',
    payloadKey: 'loginRequest',
  },
  [PACKET_TYPE.LOGIN_RESPONSE]: {
    requestType: 'S2CLoginResponse',
    payloadKey: 'loginResponse',
  },
  [PACKET_TYPE.CREATE_ROOM_REQUEST]: {
    requestType: 'C2SCreateRoomRequest',
    payloadKey: 'createRoomRequest',
  },
  [PACKET_TYPE.CREATE_ROOM_RESPONSE]: {
    requestType: 'S2CCreateRoomResponse',
    payloadKey: 'createRoomResponse',
  },
  [PACKET_TYPE.GET_ROOM_LIST_REQUEST]: {
    requestType: 'C2SGetRoomListRequest',
    payloadKey: 'getRoomListRequest',
  },
  [PACKET_TYPE.GET_ROOM_LIST_RESPONSE]: {
    requestType: 'S2CGetRoomListResponse',
    payloadKey: 'getRoomListResponse',
  },
  [PACKET_TYPE.JOIN_ROOM_REQUEST]: {
    requestType: 'C2SJoinRoomRequest',
    payloadKey: 'joinRoomRequest',
  },
  [PACKET_TYPE.JOIN_ROOM_RESPONSE]: {
    requestType: 'S2CJoinRoomResponse',
    payloadKey: 'joinRoomResponse',
  },
  [PACKET_TYPE.JOIN_RANDOM_ROOM_REQUEST]: {
    requestType: 'C2SJoinRandomRoomRequest',
    payloadKey: 'joinRandomRoomRequest',
  },
  [PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE]: {
    requestType: 'S2CJoinRandomRoomResponse',
    payloadKey: 'joinRandomRoomResponse',
  },
  [PACKET_TYPE.JOIN_ROOM_NOTIFICATION]: {
    requestType: 'S2CJoinRoomNotification',
    payloadKey: 'joinRoomNotification',
  },
  [PACKET_TYPE.LEAVE_ROOM_REQUEST]: {
    requestType: 'C2SLeaveRoomRequest',
    payloadKey: 'leaveRoomRequest',
  },
  [PACKET_TYPE.LEAVE_ROOM_RESPONSE]: {
    requestType: 'S2CLeaveRoomResponse',
    payloadKey: 'leaveRoomResponse',
  },
  [PACKET_TYPE.LEAVE_ROOM_NOTIFICATION]: {
    requestType: 'S2CLeaveRoomNotification',
    payloadKey: 'leaveRoomNotification',
  },
  [PACKET_TYPE.GAME_PREPARE_REQUEST]: {
    requestType: 'C2SGamePrepareRequest',
    payloadKey: 'gamePrepareRequest',
  },
  [PACKET_TYPE.GAME_PREPARE_RESPONSE]: {
    requestType: 'S2CGamePrepareResponse',
    payloadKey: 'gamePrepareResponse',
  },
  [PACKET_TYPE.GAME_PREPARE_NOTIFICATION]: {
    requestType: 'S2CGamePrepareNotification',
    payloadKey: 'gamePrepareNotification',
  },
  [PACKET_TYPE.GAME_START_REQUEST]: {
    requestType: 'C2SGameStartRequest',
    payloadKey: 'gameStartRequest',
  },
  [PACKET_TYPE.GAME_START_RESPONSE]: {
    requestType: 'S2CGameStartResponse',
    payloadKey: 'gameStartResponse',
  },
  [PACKET_TYPE.GAME_START_NOTIFICATION]: {
    requestType: 'S2CGameStartNotification',
    payloadKey: 'gameStartNotification',
  },
  [PACKET_TYPE.POSITION_UPDATE_REQUEST]: {
    requestType: 'C2SPositionUpdateRequest',
    payloadKey: 'positionUpdateRequest',
  },
  [PACKET_TYPE.POSITION_UPDATE_RESPONSE]: {
    requestType: 'S2CPositionUpdateResponse',
    payloadKey: 'positionUpdateResponse',
  },
  [PACKET_TYPE.POSITION_UPDATE_NOTIFICATION]: {
    requestType: 'S2CPositionUpdateNotification',
    payloadKey: 'positionUpdateNotification',
  },
  [PACKET_TYPE.USE_CARD_REQUEST]: {
    requestType: 'C2SUseCardRequest',
    payloadKey: 'useCardRequest',
  },
  [PACKET_TYPE.USE_CARD_RESPONSE]: {
    requestType: 'S2CUseCardResponse',
    payloadKey: 'useCardResponse',
  },
  [PACKET_TYPE.USE_CARD_NOTIFICATION]: {
    requestType: 'S2CUseCardNotification',
    payloadKey: 'useCardNotification',
  },
  [PACKET_TYPE.EQUIP_CARD_NOTIFICATION]: {
    requestType: 'S2CEquipCardNotification',
    payloadKey: 'equipCardNotification',
  },
  [PACKET_TYPE.CARD_EFFECT_NOTIFICATION]: {
    requestType: 'S2CCardEffectNotification',
    payloadKey: 'cardEffectNotification',
  },
  [PACKET_TYPE.USER_UPDATE_NOTIFICATION]: {
    requestType: 'S2CUserUpdateNotification',
    payloadKey: 'userUpdateNotification',
  },
  [PACKET_TYPE.REACTION_REQUEST]: {
    requestType: 'C2SReactionRequest',
    payloadKey: 'reactionRequest',
  },
  [PACKET_TYPE.REACTION_RESPONSE]: {
    requestType: 'S2CReactionResponse',
    payloadKey: 'reactionResponse',
  },
  [PACKET_TYPE.PHASE_UPDATE_NOTIFICATION]: {
    requestType: 'S2CPhaseUpdateNotification',
    payloadKey: 'phaseUpdateNotification',
  },
  [PACKET_TYPE.DESTROY_CARD_REQUEST]: {
    requestType: 'C2SDestroyCardRequest',
    payloadKey: 'destroyCardRequest',
  },
  [PACKET_TYPE.DESTROY_CARD_RESPONSE]: {
    requestType: 'S2CDestroyCardResponse',
    payloadKey: 'destroyCardResponse',
  },
  [PACKET_TYPE.GAME_END_NOTIFICATION]: {
    requestType: 'S2CGameEndNotification',
    payloadKey: 'gameEndNotification',
  },
} as const;
