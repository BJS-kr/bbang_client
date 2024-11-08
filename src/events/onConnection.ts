import { onData } from './onData';
import { onEnd } from './onEnd';
import { onError } from './onError';
import net from 'node:net';
import { Context } from './types';
import { error, log } from '../utils/logger';
import { session } from '../users/session';
import { rooms } from '../rooms/rooms';

export const onConnection = (socket: net.Socket) => {
  log(`새로운 클라이언트 연결: ${socket.remoteAddress}:${socket.remotePort}`);

  const buf = Buffer.alloc(0);
  const ctx: Context = { userId: '', roomId: 0 };

  socket.on('data', (data: Buffer) => {
    onData(
      socket,
      ctx,
      buf,
    )(data).catch((err) => {
      session.quit(ctx.userId);
      rooms.quit(ctx.roomId, ctx.userId, ctx);
      error(`Error handling data: ${err}`);
    });
  });
  socket.on('end', onEnd(socket, ctx));
  socket.on('error', onError(socket, ctx));
};
