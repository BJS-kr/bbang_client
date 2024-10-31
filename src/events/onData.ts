import { config } from '../config/config';
import { PACKET_TYPE } from '../constants/packetType';
import { registerRequestHandler, loginRequestHandler } from '../users/user.handler';
import {
  createRoomRequestHandler,
  getRoomListRequestHandler,
  joinRandomRoomRequestHandler,
  joinRoomRequestHandler,
  leaveRoomRequestHandler,
} from '../rooms/roomHandler';
import net from 'node:net';
import { decodePayload } from '../protobuf/packet';
import { Context } from './types';
import { error, log } from '../utils/logger';

export const onData = (socket: net.Socket, ctx: Context, buf: Buffer) => async (data: Buffer) => {
  buf = Buffer.concat([buf, data]);

  let offset = 0;
  while (buf.length >= config.packet.typeLength) {
    const packetType = buf.readUInt16BE(0);
    offset += config.packet.typeLength;

    if (buf.length < config.packet.typeLength + config.packet.versionLengthSize) {
      break;
    }

    const versionLength = buf.readUInt8(offset);
    offset += config.packet.versionLengthSize;

    if (buf.length < offset + versionLength) {
      break;
    }

    // TODO 버전 관리
    const version = buf.subarray(offset, offset + versionLength).toString('utf8');
    offset += versionLength;

    if (buf.length < offset + config.packet.sequenceLength) {
      break;
    }

    // TODO 시퀀스 검증
    const sequence = buf.readUint32BE(offset);
    offset += config.packet.sequenceLength;

    if (buf.length < offset + config.packet.payloadLengthSize) {
      break;
    }

    const payloadLength = buf.readUInt32BE(offset);
    offset += config.packet.payloadLengthSize;

    if (buf.length < offset + payloadLength) {
      break;
    }

    const payloadBuffer = buf.slice(offset, offset + payloadLength);
    offset += payloadLength;

    // 읽은 부분 제거 및 오프셋 초기화
    buf = buf.subarray(offset);
    offset = 0;

    switch (packetType) {
      // TODO 핑으로 교체?
      case PACKET_TYPE.NONE:
        break;

      case PACKET_TYPE.REGISTER_REQUEST:
        const registerRequest = decodePayload(packetType, payloadBuffer);
        log(`registerRequest: ${JSON.stringify(registerRequest)}`);
        await registerRequestHandler(socket, version, sequence, registerRequest);

        break;

      case PACKET_TYPE.LOGIN_REQUEST:
        const loginRequest = decodePayload(packetType, payloadBuffer);
        log(`loginRequest: ${JSON.stringify(loginRequest)}`);
        await loginRequestHandler(socket, version, sequence, loginRequest, ctx);

        break;

      case PACKET_TYPE.CREATE_ROOM_REQUEST:
        const createRoomRequest = decodePayload(packetType, payloadBuffer);
        log(`createRoomRequest: ${JSON.stringify(createRoomRequest)}`);
        await createRoomRequestHandler(socket, version, sequence, createRoomRequest, () => {}, ctx);

        break;

      case PACKET_TYPE.JOIN_ROOM_REQUEST:
        const joinRoomRequest = decodePayload(packetType, payloadBuffer);
        log(`joinRoomRequest: ${JSON.stringify(joinRoomRequest)}`);
        await joinRoomRequestHandler(socket, version, sequence, joinRoomRequest, ctx);

        break;

      case PACKET_TYPE.JOIN_RANDOM_ROOM_REQUEST:
        const joinRandomRoomRequest = decodePayload(packetType, payloadBuffer);
        log(`joinRandomRoomRequest: ${JSON.stringify(joinRandomRoomRequest)}`);
        await joinRandomRoomRequestHandler(socket, version, sequence, joinRandomRoomRequest, ctx);

        break;

      case PACKET_TYPE.LEAVE_ROOM_REQUEST:
        const leaveRoomRequest = decodePayload(packetType, payloadBuffer);
        log(`leaveRoomRequest: ${JSON.stringify(leaveRoomRequest)}`);
        await leaveRoomRequestHandler(socket, version, sequence, leaveRoomRequest, ctx);

        break;
      case PACKET_TYPE.GET_ROOM_LIST_REQUEST:
        const getRoomListRequest = decodePayload(packetType, payloadBuffer);
        log(`getRoomListRequest: ${JSON.stringify(getRoomListRequest)}`);
        await getRoomListRequestHandler(socket, version, sequence, getRoomListRequest, ctx);

        break;
      default:
        error(`Unhandled packet type: ${packetType}`);
    }
  }
};
