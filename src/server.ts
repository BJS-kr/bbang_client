import net from 'net';
import { config } from './config/config';
import { onConnection } from './events/onConnection';
import './db/migrations/createSchemas';

const server = net.createServer(onConnection);

server.listen(config.server.port, config.server.host, 10, () => {
  console.log(`Server running: ${server.address()}`);
});
