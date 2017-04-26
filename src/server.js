import { Server } from 'http';
import app from './app-server';

const env = process.env.NODE_ENV || 'dev';

const server = new Server(app);

server.listen((port = process.env.PORT || 3000, err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(`Server running on http://localhost:${port} [${env}]`);
});
