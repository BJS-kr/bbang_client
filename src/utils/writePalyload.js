import { createPacket, encodePayload } from "../handlers";

export function writePayload(socket, packetType, version, sequence, payload) {
  try {
    const encodedPayload = encodePayload(packetType, payload);
    const packet = createPacket(packetType, version, sequence, encodedPayload);
    socket.write(packet);
  } catch (e) {
    console.error(e);
  }
}
