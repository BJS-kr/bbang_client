import net from 'node:net';

export const onError = (socket: net.Socket) => (error) => {
  console.error('Socket error:', error);
  socket.end();
};
