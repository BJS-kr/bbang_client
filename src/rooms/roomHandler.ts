import { FailCode } from '../constants/fail';
import { PACKET_TYPE } from '../constants/packetType';
import {
  GlobalFailCode,
  S2CCreateRoomResponse,
  S2CJoinRandomRoomResponse,
  S2CJoinRoomNotification,
  S2CJoinRoomResponse,
  S2CLeaveRoomNotification,
  S2CLeaveRoomResponse,
} from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { writePayload } from '../utils/writePalyload';
import net from 'node:net';
import { rooms } from './rooms';
import { Context } from '../events/types';
import { session } from '../users/session';
import { User } from '../users/types';

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

  const joinResult = rooms.joinRoom(roomId, new User(user.id, user.nickname, socket), ctx);

  if (!joinResult) {
    return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const room = rooms.getRoom(roomId);
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
  const joinUser = new User(user.id, user.nickname, socket);
  const joinResult = rooms.joinRoom(roomId, joinUser, ctx);

  if (!joinResult) {
    return writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const room = rooms.getRoom(roomId);
  const payload: MessageProps<S2CJoinRoomResponse> = {
    success: true,
    room,
    failCode: FailCode.NONE,
  };

  writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, payload);

  const joinNotificationPayload: MessageProps<S2CJoinRoomNotification> = {
    joinUser,
  };

  const targets = room.users.filter((user) => user.id !== joinUser.id) ?? [];
  rooms.broadcast(targets, PACKET_TYPE.JOIN_ROOM_NOTIFICATION, joinNotificationPayload, version, sequence);
};

export const joinRandomRoomRequestHandler = async (socket: net.Socket, version, sequence, joinRandomRoomRequest, ctx: Context) => {
  const roomId = rooms.pickRandomRoomId();
  const user = session.getUser(ctx.userId);

  if (!user) {
    return writePayload(socket, PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const joinUser = new User(user.id, user.nickname, socket);
  const joinResult = rooms.joinRoom(roomId, joinUser, ctx);

  if (!joinResult) {
    return writePayload(socket, PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const room = rooms.getRoom(roomId);
  const payload: MessageProps<S2CJoinRandomRoomResponse> = {
    success: true,
    room,
    failCode: FailCode.NONE,
  };

  writePayload(socket, PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE, version, sequence, payload);

  const joinNotificationPayload: MessageProps<S2CJoinRoomNotification> = {
    joinUser,
  };

  const targets = room.users.filter((user) => user.id !== joinUser.id) ?? [];
  rooms.broadcast(targets, PACKET_TYPE.JOIN_ROOM_NOTIFICATION, joinNotificationPayload, version, sequence);
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

  const leavedUser = rooms.leaveRoom(roomId, ctx.userId, ctx);

  if (!leavedUser) {
    return writePayload(socket, PACKET_TYPE.LEAVE_ROOM_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.LEAVE_ROOM_FAILED,
    } satisfies MessageProps<S2CLeaveRoomResponse>);
  }

  writePayload(socket, PACKET_TYPE.LEAVE_ROOM_RESPONSE, version, sequence, {
    success: true,
    failCode: FailCode.NONE,
  } satisfies MessageProps<S2CLeaveRoomResponse>);

  const leaveNotificationPayload: MessageProps<S2CLeaveRoomNotification> = {
    userId: leavedUser.id,
  };

  const targets = rooms.getRoom(roomId)?.users.filter((user) => user.id !== leavedUser.id) ?? [];
  rooms.broadcast(targets, PACKET_TYPE.LEAVE_ROOM_NOTIFICATION, leaveNotificationPayload, version, sequence);
};
