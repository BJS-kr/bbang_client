import { Context } from '../events/types';
import { S2CUseCardResponse, S2CUserUpdateNotification, S2CCardEffectNotification, S2CUseCardNotification } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { Socket } from 'node:net';

export type UseCardResponse = MessageProps<S2CUseCardResponse>;
export type UserUpdateNotification = MessageProps<S2CUserUpdateNotification>;
export type CardEffectNotification = MessageProps<S2CCardEffectNotification>;
export type UseCardNotification = MessageProps<S2CUseCardNotification>;

export type HandlerBase = {
  socket: Socket;
  version: string;
  sequence: number;
  ctx: Context;
};
