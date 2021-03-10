"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var booksRoute_1 = require("./routes/booksRoute");
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var viewsRouter_1 = require("./routes/viewsRouter");
var app = express_1.default();
// app.engine allows you to specify what type of engine you want to register
//  -> give it a name that will be set as the view engine
app.engine('handlebars', expressHbs()); // now the 
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
app.use('/Books', booksRoute_1.booksRouter);
app.use('/Pages', viewsRouter_1.viewsRouter);
app.use('/', function (req, res, next) {
    res.status(404).send("Sorry page not found!");
});
app.listen(3000);
//# sourceMappingURL=app.js.map