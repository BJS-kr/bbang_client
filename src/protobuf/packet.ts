import protobuf from 'protobufjs';
import CustomError from '../utils/error/customError';
import { config } from '../config/config';
import { ERROR_CODES } from '../constants/error';
import { protoRoutes } from './routes';

const protoRoot = protobuf.loadSync('./src/protobuf/game.proto');
const GamePacket = protoRoot.lookupType('GamePacket');

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

export const encodePayload = (packetType, payload) => {
  const packetInfo = protoRoutes[packetType];

  if (!packetInfo) {
    throw new CustomError(ERROR_CODES.INVALID_PACKET, `Unknown packet type: ${packetType}`);
  }

  const { requestType, payloadKey } = protoRoutes[packetType];
  const payloadType = protoRoot.lookupType(requestType);

  const verifyError = payloadType.verify(payload);

  if (verifyError) {
    throw new CustomError(ERROR_CODES.INVALID_PAYLOAD, `Invalid payload: ${verifyError}`);
  }

  const responseMessage = payloadType.create(payload);
  const response = GamePacket.create({
    [payloadKey]: responseMessage,
  });

  return GamePacket.encode(response).finish();
};

export const decodePayload = (packetType, payloadBuffer) => {
  const packetInfo = protoRoutes[packetType];
  if (!packetInfo) {
    throw new CustomError(ERROR_CODES.INVALID_PACKET, `Unknown packet type: ${packetType}`);
  }

  const payload = GamePacket.decode(payloadBuffer);
  const { payloadKey } = protoRoutes[packetType];

  return payload[payloadKey];
};
