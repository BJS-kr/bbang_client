import { PACKET_TYPE } from '../constants/packetType.js';
import { STATE } from '../constants/character.js';
import { createUser } from '../db/user/user.db.js';
import { writePayload } from '../utils/writePalyload.js';
import { FailCode } from './index.js';
import { ROLE_TYPE } from '../constants/game.js';

export const registerRequestHandler = async (socket, version, sequence, registerRequest) => {
  const { id, password, nickname } = registerRequest;
  // TODO password 해시 할깝쇼?
  const { error } = await createUser(id, password, nickname);

  if (error) console.error(error);

  const payload = {
    success: error ? false : true,
    message: error ? '회원가입 실패' : '회원가입 성공',
    failCode: error ? FailCode.REGISTER_FAILED : FailCode.NONE,
  };

  writePayload(socket, PACKET_TYPE.REGISTER_RESPONSE, version, sequence, payload);
};

export const loginRequestHandler = async (socket, version, sequence, loginRequest) => {
  const { id, password } = loginRequest;
  socket.id = id;

  const user = await getUserByUserId(id);

  if (user.error || user.result.password !== password) {
    return writePayload(socket, PACKET_TYPE.LOGIN_RESPONSE, version, sequence, {
      success: false,
      message: '로그인 실패',
      failCode: FailCode.LOGIN_FAILED,
    });
  }

  socket.user = user.result;

  const payload = {
    success: true,
    message: '로그인 성공',
    token: 'pseudo-token',
    myInfo: {
      id: user.result.id,
      nickname: user.result.nickname,
      characterType: 0, // 이 필드는 constants가 없나용?
      roleType: ROLE_TYPE.ROLE_NONE,
      hp: 0,
      weapon: 0,
      state: {
        state: STATE.NONE,
        nextState: STATE.NONE,
        nextStateAt: 0,
      },
    },
    failCode: FailCode.NONE,
  };

  writePayload(socket, PACKET_TYPE.LOGIN_RESPONSE, version, sequence, payload);
};
