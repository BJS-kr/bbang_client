import { removeUser } from '../session/user.session.js';
import 'types.js';

export const onError = (socket) => (error) => {
  console.error('Socket error:', error);
  removeUser(socket);
  socket.end();
};
