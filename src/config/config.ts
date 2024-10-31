import { HOST, PORT, CLIENT_VERSION } from '../constants/env';
import { PACKET_TYPE_LENGTH, PACKET_VERSION_LENGTH, SEQUENCE_LENGTH, PAYLOAD_LENGTH } from '../constants/header';

export const config = {
  server: {
    port: parseInt(PORT),
    host: HOST,
  },
  client: {
    version: CLIENT_VERSION,
  },
  packet: {
    typeLength: PACKET_TYPE_LENGTH,
    versionLengthSize: PACKET_VERSION_LENGTH,
    sequenceLength: SEQUENCE_LENGTH,
    payloadLengthSize: PAYLOAD_LENGTH,
  },
} as const;
