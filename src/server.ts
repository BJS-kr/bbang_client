import net from 'node:net';
import { config } from './config/config';
import { onConnection } from './events/onConnection';
import { error, log } from './utils/logger';

process.on('uncaughtException', (err) => {
  error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

const server = net.createServer(onConnection);

server.listen(config.server.port, config.server.host, 10, () => {
  log(`Server running: ${JSON.stringify(server.address(), null, 2)}`);
});
