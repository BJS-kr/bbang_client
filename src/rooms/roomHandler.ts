import { FailCode } from '../constants/fail';
import { PACKET_TYPE } from '../constants/packetType';
import { GlobalFailCode, S2CCreateRoomResponse, S2CJoinRandomRoomResponse, S2CJoinRoomResponse, S2CLeaveRoomResponse } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { writePayload } from '../utils/writePalyload';
import net from 'node:net';
import { rooms } from './rooms';
import { Context } from '../events/types';
import { session } from '../users/session';

const createRoomFailPayload: MessageProps<S2CCreateRoomResponse> = {
  success: false,
  failCode: GlobalFailCode.CREATE_ROOM_FAILED,
};
const joinRoomFailPayload: MessageProps<S2CJoinRoomResponse> = {
  success: false,
  failCode: GlobalFailCode.JOIN_ROOM_FAILED,
};

export const createRoomRequestHandler = async (socket: net.Socket, version, sequence, createRoomRequest, onPhaseChange, ctx: Context) => {
  const { name, maxUserNum } = createRoomRequest;
  const roomId = rooms.createRoomId();
  const user = session.getUser(ctx.userId);

  if (!user) {
    return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, createRoomFailPayload);
  }

  const createResult = rooms.createRoom(roomId, name, user.id, maxUserNum, onPhaseChange);

  if (!createResult) {
    return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, createRoomFailPayload);
  }

  const joinResult = rooms.joinRoom(roomId, user.id, user.nickname);

  if (!joinResult) {
    return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  ctx.roomId = roomId;

  const room = rooms.getRoom(roomId, user.id);
  const payload: MessageProps<S2CCreateRoomResponse> = {
    success: true,
    room,
    failCode: FailCode.NONE,
  };

  return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, payload);
};

export const joinRoomRequestHandler = async (socket: net.Socket, version, sequence, joinRoomRequest, ctx: Context) => {
  const { roomId } = joinRoomRequest;
  const user = session.getUser(ctx.userId);

  if (!user) {
    return writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const joinResult = rooms.joinRoom(roomId, user.id, user.nickname);

  if (!joinResult) {
    return writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  ctx.roomId = roomId;

  const room = rooms.getRoom(roomId, user.id);
  const payload: MessageProps<S2CJoinRoomResponse> = {
    success: true,
    room,
    failCode: FailCode.NONE,
  };

  return writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, payload);
};

export const joinRandomRoomRequestHandler = async (socket: net.Socket, version, sequence, joinRandomRoomRequest, ctx: Context) => {
  const roomId = rooms.pickRandomRoom();
  const user = session.getUser(ctx.userId);

  if (!user) {
    return writePayload(socket, PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const joinResult = rooms.joinRoom(roomId, ctx.userId, user.nickname);

  if (!joinResult) {
    return writePayload(socket, PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const room = rooms.getRoom(roomId, ctx.userId);
  const payload: MessageProps<S2CJoinRandomRoomResponse> = {
    success: true,
    room,
    failCode: FailCode.NONE,
  };

  return writePayload(socket, PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE, version, sequence, payload);
};

export const leaveRoomRequestHandler = async (socket: net.Socket, version, sequence, leaveRoomRequest, ctx: Context) => {
  const { roomId } = leaveRoomRequest;
  const user = session.getUser(ctx.userId);

  if (!user) {
    return writePayload(socket, PACKET_TYPE.LEAVE_ROOM_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.LEAVE_ROOM_FAILED,
    } satisfies MessageProps<S2CLeaveRoomResponse>);
  }

  const leaveResult = rooms.leaveRoom(roomId, ctx.userId);

  if (!leaveResult) {
    return writePayload(socket, PACKET_TYPE.LEAVE_ROOM_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.LEAVE_ROOM_FAILED,
    } satisfies MessageProps<S2CLeaveRoomResponse>);
  }

  return writePayload(socket, PACKET_TYPE.LEAVE_ROOM_RESPONSE, version, sequence, {
    success: true,
    failCode: FailCode.NONE,
  } satisfies MessageProps<S2CLeaveRoomResponse>);
};
