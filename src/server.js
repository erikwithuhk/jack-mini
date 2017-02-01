import path from 'path';
import { Server } from 'http';
import app from './app-server';

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'dev';

const server = new Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
