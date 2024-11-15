import { PACKET_TYPE } from '../constants/packetType';
import { createUser, getUserByUserId } from './user.repository';
import { writePayload } from '../protobuf/writePayload';
import { C2SRegisterRequest, CharacterType, GlobalFailCode, RoleType, S2CLoginResponse } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { session } from './session';
import { Context } from '../events/types';
import net from 'node:net';
import { Character } from '../characters/class/character';
import { GameEvents } from '../game/game.events';
import { error } from '../utils/logger';

export const registerRequestHandler = async (socket: net.Socket, version, sequence, registerRequest: C2SRegisterRequest) => {
  const { email, password, nickname } = registerRequest;

  const result = await createUser(email, password, nickname);
  const isError = result instanceof Error;

  if (isError) console.error(result);

  const payload = {
    success: isError ? false : true,
    message: isError ? '회원가입 실패' : '회원가입 성공',
    failCode: isError ? GlobalFailCode.REGISTER_FAILED : GlobalFailCode.NONE_FAILCODE,
  };

  writePayload(socket, PACKET_TYPE.REGISTER_RESPONSE, version, sequence, payload);
};

export const loginRequestHandler = async (socket: net.Socket, version, sequence, loginRequest, ctx: Context) => {
  const { email, password } = loginRequest;

  const result = await getUserByUserId(email);
  const isError = result instanceof Error;

  if (isError || result.password !== password) {
    error('loginRequestHandler: login failed');

    return writePayload(socket, PACKET_TYPE.LOGIN_RESPONSE, version, sequence, {
      success: false,
      message: '로그인 실패',
      failCode: GlobalFailCode.AUTHENTICATION_FAILED,
    });
  }

  ctx.userId = result.id;

  const payload: MessageProps<S2CLoginResponse> = {
    success: true,
    message: '로그인 성공',
    token: 'pseudo-token',
    myInfo: {
      id: Number(result.id),
      nickname: result.nickname,
      character: new Character({
        userId: result.id,
        hp: 0,
        roleType: RoleType.NONE_ROLE,
        characterType: CharacterType.NONE_CHARACTER,
        baseDefenseChance: 0,
        gameEvents: new GameEvents(0),
      }).toCharacterData(result.id),
    },
    failCode: GlobalFailCode.NONE_FAILCODE,
  };

  writePayload(socket, PACKET_TYPE.LOGIN_RESPONSE, version, sequence, payload);

  const joinResult = session.join(result);

  if (joinResult instanceof Error) {
    console.error(joinResult.message);
  }
};
