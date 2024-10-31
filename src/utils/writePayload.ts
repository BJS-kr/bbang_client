import { error, log } from '../utils/logger';
import { createPacket, encodePayload } from '../protobuf/packet';

export function writePayload(socket, packetType, version, sequence, payload) {
  try {
    log(`writePayload: ${JSON.stringify(payload, (key, value) => (key === 'socket' ? undefined : value))}`);
    const encodedPayload = encodePayload(packetType, payload);
    const packet = createPacket(packetType, version, sequence, encodedPayload);

    socket.write(packet);
  } catch (e) {
    error(e);
  }
}
