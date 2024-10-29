import { PACKET_TYPE } from "../constants/packetType.js";
import { createPacket, FailCode, encodePayload } from "./index.js";
import jwt from "jsonwebtoken";

export const registerRequestHandler = async (
  socket,
  version,
  sequence,
  registerRequest,
) => {
  const { id, password, email } = registerRequest;

  // TODO
};

export const loginRequestHandler = async (
  socket,
  version,
  sequence,
  loginRequest,
) => {
  const { id, password } = loginRequest;
  socket.id = id;

  // TODO

  const response = {
    success: true,
    message: "로그인 성공",
    token: jwt.sign({ userId: id }, "secret"),
    failCode: FailCode.NONE,
  };

  const payloadBuffer = encodePayload(PACKET_TYPE.LOGIN_RESPONSE, response);
  const packet = createPacket(
    PACKET_TYPE.LOGIN_RESPONSE,
    version,
    sequence,
    payloadBuffer,
  );
  socket.write(packet);

  console.log("send");
};
