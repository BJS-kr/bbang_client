import { PACKET_TYPE } from '../constants/packetType';
import { createUser, getUserByUserId } from './user.repository';
import { writePayload } from '../protobuf/writePayload';
import { GlobalFailCode, S2CLoginResponse } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { session } from './session';
import { Context } from '../events/types';
import net from 'node:net';
import { Character } from '../characters/character';
import { CHARACTER_TYPE } from '../constants/game';
import { ROLE_TYPE } from '../constants/game';

export const registerRequestHandler = async (socket: net.Socket, version, sequence, registerRequest) => {
  const { id, password, nickname } = registerRequest;

  const result = await createUser(id, password, nickname);
  const isError = result instanceof Error;

  if (isError) console.error(result);

  const payload = {
    success: isError ? false : true,
    message: isError ? '회원가입 실패' : '회원가입 성공',
    failCode: isError ? GlobalFailCode.REGISTER_FAILED : GlobalFailCode.NONE,
  };

  writePayload(socket, PACKET_TYPE.REGISTER_RESPONSE, version, sequence, payload);
};

export const loginRequestHandler = async (socket: net.Socket, version, sequence, loginRequest, ctx: Context) => {
  const { id, password } = loginRequest;

  const result = await getUserByUserId(id);
  const isError = result instanceof Error;

  if (isError || result.password !== password) {
    return writePayload(socket, PACKET_TYPE.LOGIN_RESPONSE, version, sequence, {
      success: false,
      message: '로그인 실패',
      failCode: GlobalFailCode.AUTHENTICATION_FAILED,
    });
  }

  ctx.userId = result.userId;

  const payload: MessageProps<S2CLoginResponse> = {
    success: true,
    message: '로그인 성공',
    token: 'pseudo-token',
    myInfo: {
      id: result.userId,
      nickname: result.nickname,
      character: new Character({
        userId: result.userId,
        hp: 0,
        roleType: ROLE_TYPE.NONE,
        characterType: CHARACTER_TYPE.NONE,
        baseDefenseChance: 0,
      }).toCharacterData(result.userId),
    },
    failCode: GlobalFailCode.NONE,
  };

  writePayload(socket, PACKET_TYPE.LOGIN_RESPONSE, version, sequence, payload);

  const joinResult = session.join(result);

  if (joinResult instanceof Error) {
    console.error(joinResult.message);
  }
};
