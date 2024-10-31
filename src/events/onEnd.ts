import net from 'node:net';
import { Context } from './types';
import { session } from '../users/session';
import { log } from '../utils/logger';

export const onEnd = (socket: net.Socket, ctx: Context) => () => {
  log('클라이언트와의 연결이 종료되었습니다.');
  session.quit(ctx.userId);
  socket.end();
};
