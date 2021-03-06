"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const UserRouter_1 = require("./routes/UserRouter");
const UserRouter_2 = require("./routes/UserRouter");
const PostRouter_1 = require("./routes/PostRouter");
// export const ACCESS_TOKEN_SECRET = ;
// console.log(path.join(process.cwd(), "views", "help.html"));
// create the express application
let app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
// use the user router
app.use('/Users', UserRouter_2.userRouter);
app.use('/Posts', PostRouter_1.postRouter);
app.get("/", (req, res, next) => {
    console.log(req.url);
    res.sendFile(path_1.default.join(process.cwd(), "views", "help.html"));
    // res.send('<h1>Help Page</h1><form method="POST"><input type="text" name="Name"/><input type="submit"/></form>');
});
app.get("/Users", (req, res, next) => {
    console.log(UserRouter_1.userDB.toJSON());
    res.type('json').send(UserRouter_1.userDB.toJSON());
});
app.listen(3000);
//# sourceMappingURL=index.js.map