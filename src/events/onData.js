import { config } from "../config/config.js";
import { decodePayload, encodePayload, routes } from "../handlers/index.js";
import { PACKET_TYPE } from "../constants/packetType.js";
import {
  registerRequestHandler,
  loginRequestHandler,
} from "../handlers/authHandler.js";
import "types.js";
import { FAIL_CODE } from "../constants/fail.js";
import {
  createRoomRequestHandler,
  joinRandomRoomRequestHandler,
  joinRoomRequestHandler,
  leaveRoomRequestHandler,
} from "../handlers/roomHandler.js";

export const onData = (socket) => async (data) => {
  socket.buffer = Buffer.concat([socket.buffer, data]);

  let offset = 0;
  while (socket.buffer.length >= config.packet.typeLength) {
    const packetType = socket.buffer.readUInt16BE(0);
    offset += config.packet.typeLength;

    if (
      socket.buffer.length <
      config.packet.typeLength + config.packet.versionLengthSize
    ) {
      break;
    }

    const versionLength = socket.buffer.readUInt8(offset);
    offset += config.packet.versionLengthSize;

    if (socket.buffer.length < offset + versionLength) {
      break;
    }

    // TODO 버전 관리
    const version = socket.buffer
      .subarray(offset, offset + versionLength)
      .toString("utf8");
    offset += versionLength;

    if (socket.buffer.length < offset + config.packet.sequenceLength) {
      break;
    }

    // TODO 시퀀스 검증
    const sequence = socket.buffer.readUint32BE(offset);
    offset += config.packet.sequenceLength;

    if (socket.buffer.length < offset + config.packet.payloadLengthSize) {
      break;
    }

    const payloadLength = socket.buffer.readUInt32BE(offset);
    offset += config.packet.payloadLengthSize;

    if (socket.buffer.length < offset + payloadLength) {
      break;
    }

    const payloadBuffer = socket.buffer.slice(offset, offset + payloadLength);
    offset += payloadLength;

    // 읽은 부분 제거 및 오프셋 초기화
    socket.buffer = socket.buffer.subarray(offset);
    offset = 0;

    switch (packetType) {
      // TODO 핑으로 교체?
      case PACKET_TYPE.NONE:
        break;

      case PACKET_TYPE.REGISTER_REQUEST:
        const registerRequest = decodePayload(packetType, payloadBuffer);
        await registerRequestHandler(
          socket,
          version,
          sequence,
          registerRequest,
        );

        break;

      case PACKET_TYPE.LOGIN_REQUEST:
        const loginRequest = decodePayload(packetType, payloadBuffer);
        await loginRequestHandler(socket, version, sequence, loginRequest);

        break;

      case PACKET_TYPE.CREATE_ROOM_REQUEST:
        const createRoomRequest = decodePayload(packetType, payloadBuffer);
        await createRoomRequestHandler(
          socket,
          version,
          sequence,
          createRoomRequest,
        );

        break;

      case PACKET_TYPE.JOIN_ROOM_REQUEST:
        const joinRoomRequest = decodePayload(packetType, payloadBuffer);
        await joinRoomRequestHandler(
          socket,
          version,
          sequence,
          joinRoomRequest,
        );

        break;

      case PACKET_TYPE.JOIN_RANDOM_ROOM_REQUEST:
        const joinRandomRoomRequest = decodePayload(packetType, payloadBuffer);
        await joinRoomRequestHandler(
          socket,
          version,
          sequence,
          joinRandomRoomRequest,
        );

        break;

      case PACKET_TYPE.LEAVE_ROOM_REQUEST:
        const leaveRoomRequest = decodePayload(packetType, payloadBuffer);
        await leaveRoomRequestHandler(
          socket,
          version,
          sequence,
          leaveRoomRequest,
        );

        break;

      default:
        const request = decodePayload(packetType, payloadBuffer);
        const handler = getHandlerByType(packetType);
        await handler(socket, version, sequence, request);

        break;
    }
  }
};
