import 'dotenv/config';
import App from './app';
import IndexRoute from './routes/index.routes';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([
  new IndexRoute(),
  // more routes here
]);

app.listen();
