import net from 'node:net';
import { Context } from './types';
import { session } from '../users/session';

export const onError = (socket: net.Socket, ctx: Context) => (error) => {
  console.error('Socket error:', error);
  session.quit(ctx.userId);
  socket.end();
};
