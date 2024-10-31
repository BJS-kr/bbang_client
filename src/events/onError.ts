import net from 'node:net';
import { Context } from './types';
import { session } from '../users/session';
import { rooms } from '../rooms/rooms';

export const onError = (socket: net.Socket, ctx: Context) => (error) => {
  console.error('Socket error:', error);
  session.quit(ctx.userId);
  rooms.quit(ctx.roomId, ctx.userId, ctx);
  socket.end();
};
