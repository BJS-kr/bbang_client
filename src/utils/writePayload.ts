import { createPacket, encodePayload } from '../protobuf/packet';

export function writePayload(socket, packetType, version, sequence = 0, payload) {
  try {
    const encodedPayload = encodePayload(packetType, payload);
    const packet = createPacket(packetType, version, sequence, encodedPayload);

    socket.write(packet);
  } catch (e) {
    console.error(e);
  }
}
