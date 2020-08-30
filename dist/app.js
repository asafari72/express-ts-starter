"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const hpp = require("hpp");
const logger = require("morgan");
// import errorMiddleware from './middlewares/error.middleware';
class App {
    constructor(routes) {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.env = process.env.NODE_ENV === 'production' ? true : false;
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        //this.initializeErrorHandling();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
    getServer() {
        return this.app;
    }
    initializeMiddlewares() {
        if (this.env) {
            this.app.use(hpp());
            this.app.use(helmet());
            this.app.use(logger('combined'));
            this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
        }
        else {
            this.app.use(logger('dev'));
            this.app.use(cors({ origin: true, credentials: true }));
        }
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map