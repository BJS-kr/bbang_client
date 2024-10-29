import { PACKET_TYPE } from "../constants/packetType.js";
import { createUser, getUserPasswordByUserId } from "../db/user/user.db.js";
import { writePayload } from "../utils/writePalyload.js";
import { FailCode } from "./index.js";
import jwt from "jsonwebtoken";

export const registerRequestHandler = async (
  socket,
  version,
  sequence,
  registerRequest,
) => {
  const { id, password, nickname } = registerRequest;
  // TODO password 해시 할깝쇼?
  const { error } = await createUser(id, password, nickname);

  if (error) console.error(error);

  const payload = {
    success: error ? false : true,
    message: error ? "회원가입 실패" : "회원가입 성공",
    failCode: error ? FailCode.REGISTER_FAILED : FailCode.NONE,
  };

  writePayload(
    socket,
    PACKET_TYPE.REGISTER_RESPONSE,
    version,
    sequence,
    payload,
  );
};

export const loginRequestHandler = async (
  socket,
  version,
  sequence,
  loginRequest,
) => {
  const { id, password } = loginRequest;
  socket.id = id;

  const user = await getUserByUserId(id);

  if (user.error || user.result.password !== password) {
    return writePayload(socket, PACKET_TYPE.LOGIN_RESPONSE, version, sequence, {
      success: false,
      message: "로그인 실패",
      failCode: FailCode.LOGIN_FAILED,
    });
  }

  const payload = {
    success: true,
    message: "로그인 성공",
    token: jwt.sign({ userId: id }, "secret"),
    myInfo: {
      id: user.result.id,
      nickname: user.result.nickname,
      // TODO UserData 초깃값 뭘로 설정해야하는지? 일단 optional로 설정
    },
    failCode: FailCode.NONE,
  };

  writePayload(socket, PACKET_TYPE.LOGIN_RESPONSE, version, sequence, payload);
};
