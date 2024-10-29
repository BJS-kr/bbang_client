import { PACKET_TYPE } from "../constants/packetType.js";
import { createPacket, FailCode, encodePayload } from "./index.js";
import jwt from "jsonwebtoken";

export const createRoomRequestHandler = async (
  socket,
  version,
  sequence,
  registerRequest,
) => {
  const { id, password, email } = registerRequest;

  // TODO
};

export const joinRoomRequestHandler = async (
  socket,
  version,
  sequence,
  registerRequest,
) => {
  const { id, password, email } = registerRequest;

  // TODO
};

export const joinRandomRoomRequestHandler = async (
  socket,
  version,
  sequence,
  registerRequest,
) => {
  const { id, password, email } = registerRequest;

  // TODO
};

export const leaveRoomRequestHandler = async (
  socket,
  version,
  sequence,
  registerRequest,
) => {
  const { id, password, email } = registerRequest;

  // TODO
};
