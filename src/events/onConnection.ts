import { onData } from './onData';
import { onEnd } from './onEnd';
import { onError } from './onError';
import net from 'node:net';
import { Context } from './types';

export const onConnection = (socket: net.Socket) => {
  console.log(`새로운 클라이언트 연결: ${socket.remoteAddress}:${socket.remotePort}`);

  const buf = Buffer.alloc(0);
  const ctx: Context = { userId: '', roomId: 0 };

  socket.on('data', onData(socket, ctx, buf));
  socket.on('end', onEnd(socket, ctx));
  socket.on('error', onError(socket, ctx));
};