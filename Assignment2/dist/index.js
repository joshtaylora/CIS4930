"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
// create the express application
let app = express_1.default();
let server = http_1.default.createServer(app);
/**
 * Endpoints for api
 */
app.use('/', (req, res, next) => {
    console.log(req.url);
    res.send("<h1>Help Page</h1>");
});
app.use('/Users', (req, res, next) => {
    console.log(req.url);
    res.send("<h1>Users endpoint</h1>");
});
server.listen(3000);
//# sourceMappingURL=index.js.map