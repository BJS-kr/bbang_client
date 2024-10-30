import { onData } from './onData.js';
import { onEnd } from './onEnd.js';
import { onError } from './onError.js';
import 'types.js';

/**
 *
 * @param {CustomSocket} socket
 */
export const onConnection = (socket) => {
  console.log(`새로운 클라이언트 연결: ${socket.remoteAddress}:${socket.remotePort}`);

  socket.buffer = Buffer.alloc(0);

  socket.on('data', onData(socket));
  socket.on('end', onEnd(socket));
  socket.on('error', onError(socket));
};
