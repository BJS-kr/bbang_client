import { error, log } from '../utils/logger';
import { createPacket, decodePayload, encodePayload } from '../protobuf/packet';

export function writePayload(socket, packetType, version, sequence, payload) {
  try {
    log(`writePayload: ${JSON.stringify(payload, (key, value) => (key === 'socket' ? undefined : value))}`);
    const encodedPayload = encodePayload(packetType, payload);

    // TODO 테스트
    log(`decodePayload: ${JSON.stringify(decodePayload(packetType, encodedPayload), (key, value) => (key === 'socket' ? undefined : value))}`);
    const packet = createPacket(packetType, version, sequence, encodedPayload);

    socket.write(packet);
  } catch (e) {
    error(e);
  }
}
