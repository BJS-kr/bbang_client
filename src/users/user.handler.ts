import { PACKET_TYPE } from '../constants/packetType';
import { createUser, getUserByUserId } from './user.repository';
import { writePayload } from '../utils/writePalyload';
import { ROLE_TYPE, USER_STATE } from '../constants/game';
import { FailCode } from '../constants/fail';
import net from 'node:net';

export const registerRequestHandler = async (socket: net.Socket, version, sequence, registerRequest) => {
  const { id, password, nickname } = registerRequest;

  const result = await createUser(id, password, nickname);
  const isError = result instanceof Error;

  if (isError) console.error(result);

  const payload = {
    success: isError ? false : true,
    message: isError ? '회원가입 실패' : '회원가입 성공',
    failCode: isError ? FailCode.REGISTER_FAILED : FailCode.NONE,
  };

  writePayload(socket, PACKET_TYPE.REGISTER_RESPONSE, version, sequence, payload);
};

export const loginRequestHandler = async (socket, version, sequence, loginRequest) => {
  const { id, password } = loginRequest;
  socket.id = id;

  const result = await getUserByUserId(id);
  const isError = result instanceof Error;

  if (isError || result.password !== password) {
    return writePayload(socket, PACKET_TYPE.LOGIN_RESPONSE, version, sequence, {
      success: false,
      message: '로그인 실패',
      failCode: FailCode.AUTHENTICATION_FAILED,
    });
  }

  socket.userId = result.id;

  const payload = {
    success: true,
    message: '로그인 성공',
    token: 'pseudo-token',
    myInfo: {
      id: result.id,
      nickname: result.nickname,
      characterType: 0, // 이 필드는 constants가 없나용?
      roleType: ROLE_TYPE.NONE,
      hp: 0,
      weapon: 0,
      state: {
        state: USER_STATE.NONE,
        nextState: USER_STATE.NONE,
        nextStateAt: 0,
      },
    },
    failCode: FailCode.NONE,
  };

  writePayload(socket, PACKET_TYPE.LOGIN_RESPONSE, version, sequence, payload);
};
