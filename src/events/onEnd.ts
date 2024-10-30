import net from 'node:net';

export const onEnd = (socket: net.Socket) => () => {
  console.log('클라이언트와의 연결이 종료되었습니다.');
  socket.end();
};
