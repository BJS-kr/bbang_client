import { error, log } from '../utils/logger';
import { createPacket, decodePayload, encodePayload } from './packet';
import { TOTAL_LENGTH, PACKET_TYPE_LENGTH, PACKET_VERSION_LENGTH, SEQUENCE_LENGTH, PAYLOAD_LENGTH } from '../constants/header';

export function writePayload(socket, packetType: number, version: string, sequence: number, payload) {
  // log(`writePayload: ${JSON.stringify(payload, (key, value) => (key === 'socket' ? undefined : value))}`);
  const encodedPayload = encodePayload(packetType, payload);
  if (encodedPayload instanceof Error) {
    return error(encodedPayload);
  }

  console.log('===================================');
  console.log(socket);
  console.log('Encoded Payload Length:', encodedPayload.length);
  log(`decodePayload:|${packetType}|${JSON.stringify(decodePayload(packetType, encodedPayload))}`);

  const packet = createPacket(packetType, version, sequence, encodedPayload);
  const expectedSize = PACKET_TYPE_LENGTH + PACKET_VERSION_LENGTH + version.length + SEQUENCE_LENGTH + PAYLOAD_LENGTH + encodedPayload.length;

  console.log(`packet.length:${packet.length}`);
  console.log(`${expectedSize === packet.length}`);

  const writeResult = socket.write(packet, (err) => {
    if (err) {
      error(`Socket write error: ${err}`);
    } else {
      log(`Socket write success for packet type: ${packetType}`);
    }
  });

  console.log('Write result (buffer flushed):', writeResult);
}
