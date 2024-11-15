import { PACKET_TYPE } from '../constants/packetType';
import {
  GlobalFailCode,
  RoomStateType,
  S2CCreateRoomResponse,
  S2CGetRoomListResponse,
  S2CJoinRandomRoomResponse,
  S2CJoinRoomNotification,
  S2CJoinRoomResponse,
  S2CLeaveRoomNotification,
  S2CLeaveRoomResponse,
} from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { writePayload } from '../protobuf/writePayload';
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

export const createRoomRequestHandler = async (socket: net.Socket, version, sequence, createRoomRequest, ctx: Context) => {
  const { name, maxUserNum } = createRoomRequest;
  const roomId = rooms.createRoomId();
  const user = session.getUser(ctx.userId);

  if (!user) {
    return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, createRoomFailPayload);
  }

  const createResult = rooms.create(roomId, name, user.id, maxUserNum);
  if (!createResult) {
    return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, createRoomFailPayload);
  }

  const joinResult = rooms.join(roomId, new User(user.id, user.nickname ?? 'pseudo-nickname', socket), ctx);

  if (!joinResult) {
    return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const room = rooms.getRoom(roomId);
  const payload: MessageProps<S2CCreateRoomResponse> = {
    success: true,
    room: room?.toRoomData(roomId),
    failCode: GlobalFailCode.NONE_FAILCODE,
  };

  return writePayload(socket, PACKET_TYPE.CREATE_ROOM_RESPONSE, version, sequence, payload);
};

export const joinRoomRequestHandler = async (socket: net.Socket, version, sequence, joinRoomRequest, ctx: Context) => {
  const { roomId } = joinRoomRequest;
  const user = session.getUser(ctx.userId);

  if (!user) {
    return writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }
  const joinUser = new User(user.id, user.nickname ?? 'pseudo-nickname', socket);
  const joinResult = rooms.join(roomId, joinUser, ctx);

  if (!joinResult) {
    return writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const room = rooms.getRoom(roomId);

  if (!room) {
    return writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  if (room.state !== RoomStateType.WAIT) {
    return writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const payload: MessageProps<S2CJoinRoomResponse> = {
    success: true,
    room: room?.toRoomData(roomId),
    failCode: GlobalFailCode.NONE_FAILCODE,
  };

  writePayload(socket, PACKET_TYPE.JOIN_ROOM_RESPONSE, version, sequence, payload);

  const joinNotificationPayload: MessageProps<S2CJoinRoomNotification> = {
    joinUser: joinUser.toUserData(ctx.userId),
  };

  room.broadcast(PACKET_TYPE.JOIN_ROOM_NOTIFICATION, joinNotificationPayload);
};

export const joinRandomRoomRequestHandler = async (socket: net.Socket, version, sequence, joinRandomRoomRequest, ctx: Context) => {
  const roomId = rooms.pickRandomRoomId({}, ctx.userId);
  const user = session.getUser(ctx.userId);

  if (!user) {
    return writePayload(socket, PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const joinUser = new User(user.id, user.nickname ?? 'pseudo-nickname', socket);
  const joinResult = rooms.join(roomId, joinUser, ctx);

  if (!joinResult) {
    return writePayload(socket, PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const room = rooms.getRoom(roomId);

  if (!room) {
    return writePayload(socket, PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE, version, sequence, joinRoomFailPayload);
  }

  const payload: MessageProps<S2CJoinRandomRoomResponse> = {
    success: true,
    room: room?.toRoomData(roomId),
    failCode: GlobalFailCode.NONE_FAILCODE,
  };

  writePayload(socket, PACKET_TYPE.JOIN_RANDOM_ROOM_RESPONSE, version, sequence, payload);

  const joinNotificationPayload: MessageProps<S2CJoinRoomNotification> = {
    joinUser: joinUser.toUserData(ctx.userId),
  };

  room.broadcast(PACKET_TYPE.JOIN_ROOM_NOTIFICATION, joinNotificationPayload);
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

  const room = rooms.getRoom(roomId);

  if (!room) {
    return writePayload(socket, PACKET_TYPE.LEAVE_ROOM_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.LEAVE_ROOM_FAILED,
    } satisfies MessageProps<S2CLeaveRoomResponse>);
  }

  const leavedUser = rooms.quit(roomId, ctx.userId, ctx);

  if (!leavedUser) {
    return writePayload(socket, PACKET_TYPE.LEAVE_ROOM_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.LEAVE_ROOM_FAILED,
    } satisfies MessageProps<S2CLeaveRoomResponse>);
  }

  writePayload(socket, PACKET_TYPE.LEAVE_ROOM_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE_FAILCODE,
  } satisfies MessageProps<S2CLeaveRoomResponse>);

  const leaveNotificationPayload: MessageProps<S2CLeaveRoomNotification> = {
    userId: Number(leavedUser.id),
  };

  room.broadcast(PACKET_TYPE.LEAVE_ROOM_NOTIFICATION, leaveNotificationPayload);
};

export const getRoomListRequestHandler = async (socket: net.Socket, version, sequence, getRoomListRequest, ctx: Context) => {
  const roomList = rooms.getRoomList();

  const payload: MessageProps<S2CGetRoomListResponse> = {
    rooms: roomList,
  };

  writePayload(socket, PACKET_TYPE.GET_ROOM_LIST_RESPONSE, version, sequence, payload);
};
