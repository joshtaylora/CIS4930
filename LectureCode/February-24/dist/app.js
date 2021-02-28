"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booksRoute_1 = require("./routes/booksRoute");
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
let app = express_1.default();
// use pug templating engine
app.set('view engine', 'pug');
// tell pug where the template views are
app.set('views', 'src/views');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
app.use('/Books', booksRoute_1.booksRouter);
app.use('/', (req, res, next) => {
    res.status(404).send(`Sorry page not found!`);
});
app.listen(3000);
//# sourceMappingURL=app.js.map