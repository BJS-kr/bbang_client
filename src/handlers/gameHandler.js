import { PACKET_TYPE } from "../constants/packetType.js";
import { createPacket, FailCode, encodePayload } from "./index.js";
import jwt from "jsonwebtoken";

export const gameStartRequestHandler = async (
  socket,
  version,
  sequence,
  registerRequest,
) => {
  const { id, password, email } = registerRequest;

  // TODO
};

export const positionUpdateRequestHandler = async (
  socket,
  version,
  sequence,
  registerRequest,
) => {
  const { id, password, email } = registerRequest;

  // TODO
};

export const useCardRequestHandler = async (
  socket,
  version,
  sequence,
  registerRequest,
) => {
  const { id, password, email } = registerRequest;

  // TODO
};
