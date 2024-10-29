import {
  HOST,
  PORT,
  CLIENT_VERSION,
  DB1_NAME,
  DB1_USER,
  DB1_PASSWORD,
  DB1_HOST,
  DB1_PORT,
  DB2_NAME,
  DB2_USER,
  DB2_PASSWORD,
  DB2_HOST,
  DB2_PORT,
} from "../constants/env.js";
import {
  PACKET_TYPE_LENGTH,
  PACKET_VERSION_LENGTH,
  SEQUENCE_LENGTH,
  PAYLOAD_LENGTH,
} from "../constants/header.js";

export const config = {
  server: {
    port: PORT,
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
  databases: {
    GAME_DB: {
      name: DB1_NAME,
      user: DB1_USER,
      password: DB1_PASSWORD,
      host: DB1_HOST,
      port: DB1_PORT,
    },
    USER_DB: {
      name: DB2_NAME,
      user: DB2_USER,
      password: DB2_PASSWORD,
      host: DB2_HOST,
      port: DB2_PORT,
    },
  },
};
