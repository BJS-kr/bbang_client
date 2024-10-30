import { FailCode } from '../constants/fail';
import { PACKET_TYPE } from '../constants/packetType';
import { writePayload } from '../utils/writePalyload';
import { Rooms } from './rooms';

const rooms = new Rooms();
const createRoomFailPayload = {
  success: false,
  failCode: FailCode.CREATE_ROOM_FAILED,
};
const joinRoomFailPayload = {
  success: false,
  failCode: FailCode.JOIN_ROOM_FAILED,
};

export const createRoomRequestHandler = async (socket, version, sequence, createRoomRequest) => {
  const { name, maxUserNum } = createRoomRequest;
  const roomId = rooms.createRoomId();
  const { user } = socket;

  if (user.error) {
    return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, createRoomFailPayload);
  }

  const createResult = rooms.createRoom(roomId, name, user.id, maxUserNum);

  if (!createResult) {
    return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, createRoomFailPayload);
  }

  const joinResult = rooms.joinRoom(roomId, user.id, user.nickname);

  if (!joinResult) {
    return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const room = rooms.getRoom(roomId, user.id);
  const payload = {
    success: true,
    room,
    failCode: FailCode.NONE,
  };

  return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, payload);
};

export const joinRoomRequestHandler = async (socket, version, sequence, joinRoomRequest) => {
  const { roomId } = joinRoomRequest;
  const { user } = socket;

  if (user.error) {
    return writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const joinResult = rooms.joinRoom(roomId, user.id, user.nickname);

  if (!joinResult) {
    return writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const room = rooms.getRoom(roomId, user.id);
  const payload = {
    success: true,
    room,
    failCode: FailCode.NONE,
  };

  return writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, payload);
};

export const joinRandomRoomRequestHandler = async (socket, version, sequence, joinRandomRoomRequest) => {
  const { roomId } = joinRandomRoomRequest;
};

export const leaveRoomRequestHandler = async (socket, version, sequence, leaveRoomRequest) => {
  const { roomId } = leaveRoomRequest;
  const leaveResult = rooms.leaveRoom(roomId, socket.id);

  if (!leaveResult) {
    return writePayload(socket, PACKET_TYPE.LEAVE_ROOM_RESPONSE, version, sequence, {
      success: false,
      failCode: FailCode.LEAVE_ROOM_FAILED,
    });
  }

  return writePayload(socket, PACKET_TYPE.LEAVE_ROOM_RESPONSE, version, sequence, {
    success: true,
    failCode: FailCode.NONE,
  });
};
