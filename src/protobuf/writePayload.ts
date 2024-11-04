import { error, log } from '../utils/logger';
import { createPacket, decodePayload, encodePayload } from './packet';

export function writePayload(socket, packetType: number, version: string, sequence: number, payload) {
  // log(`writePayload: ${JSON.stringify(payload, (key, value) => (key === 'socket' ? undefined : value))}`);
  const encodedPayload = encodePayload(packetType, payload);

  if (encodedPayload instanceof Error) {
    return error(encodedPayload);
  }

  log(`decodePayload: ${packetType}|${JSON.stringify(decodePayload(packetType, encodedPayload))}`);
  socket.write(createPacket(packetType, version, sequence, encodedPayload));
}
