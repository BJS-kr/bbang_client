import { error, log } from '../utils/logger';
import { createPacket, decodePayload, encodePayload } from './packet';
import { PACKET_TYPE_LENGTH, PACKET_VERSION_LENGTH, SEQUENCE_LENGTH, PAYLOAD_LENGTH } from '../constants/header';

export function writePayload(socket, packetType: number, version: string, sequence: number, payload) {
  // log(`writePayload: ${JSON.stringify(payload, (key, value) => (key === 'socket' ? undefined : value))}`);
  const encodedPayload = encodePayload(packetType, payload);
  if (encodedPayload instanceof Error) {
    return error(encodedPayload);
  }

  log(`decodePayload:|${packetType}|${JSON.stringify(decodePayload(packetType, encodedPayload))}`);

  const packet = createPacket(packetType, version, sequence, encodedPayload);
  const expectedSize = PACKET_TYPE_LENGTH + PACKET_VERSION_LENGTH + version.length + SEQUENCE_LENGTH + PAYLOAD_LENGTH + encodedPayload.length;
  if (expectedSize != packet.length) {
    error(`createPacket error. packetType: ${packetType}`);
  }

  socket.write(packet);
}
