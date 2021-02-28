"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const booksRoute_1 = require("./routes/booksRoute");
let app = express_1.default();
const port = 3000;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json);
// public endpoint that will be the first endpoint that is checked
app.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
app.use('/Books', booksRoute_1.booksRouter);
app.use('/', (req, res, next) => {
    res.status(404).send('Error, page not found');
});
app.listen(port);
//# sourceMappingURL=script.js.map