"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const index_routes_1 = require("./routes/index.routes");
const validateEnv_1 = require("./utils/validateEnv");
validateEnv_1.default();
const app = new app_1.default([
    new index_routes_1.default()
]);
app.listen();
//# sourceMappingURL=server.js.map