import { error, log } from '../utils/logger';
import { createPacket, decodePayload, encodePayload } from './packet';
import { PACKET_TYPE_LENGTH, PACKET_VERSION_LENGTH, SEQUENCE_LENGTH, PAYLOAD_LENGTH } from '../constants/header';
import { PACKET_TYPE } from '../constants/packetType';

function skipHandCards(key, value) {
  if (key === 'handCards') {
    return;
  }

  return value;
}

export function writePayload(socket, packetType: number, version: string, sequence: number, payload) {
  const encodedPayload = encodePayload(packetType, payload);
  if (encodedPayload instanceof Error) {
    return error(encodedPayload);
  }

  if (packetType !== PACKET_TYPE.POSITION_UPDATE_NOTIFICATION && packetType !== PACKET_TYPE.POSITION_UPDATE_RESPONSE) {
    log(
      `decodePayload:|${packetType}|${JSON.stringify(decodePayload(packetType, encodedPayload), process.env.DEBUG ? undefined : skipHandCards, 2)}`,
    );
  }

  const packet = createPacket(packetType, version, sequence, encodedPayload);
  const expectedSize = PACKET_TYPE_LENGTH + PACKET_VERSION_LENGTH + version.length + SEQUENCE_LENGTH + PAYLOAD_LENGTH + encodedPayload.length;
  if (expectedSize != packet.length) {
    error(`createPacket error. packetType: ${packetType}`);
  }

  socket.write(packet);
}
