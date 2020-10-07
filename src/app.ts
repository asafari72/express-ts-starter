import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import logger from 'morgan';
import Routes from './interfaces/routes.interface';
import {Connection} from 'tedious';
import {dbConfig} from './global/db.config';
// import errorMiddleware from './middlewares/error.middleware';

class App {
  public app: express.Application;
  public port: string | number;
  public env: boolean;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV === 'production' ? true : false;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.connectToDataBase();
    // this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    if (this.env) {
      this.app.use(hpp());
      this.app.use(helmet());
      this.app.use(logger('combined'));
      this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
    } else {
      this.app.use(logger('dev'));
      this.app.use(cors({ origin: true, credentials: true }));
    }

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(cookieParser());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router);
    });
  }

  private connectToDataBase() {
   
    var connection = new Connection(dbConfig);
    connection.on('connect', (err: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected DB');
      }
    });
  }

  // private initializeErrorHandling() {
  //   this.app.use(errorMiddleware);
  // }
}

export default App;
