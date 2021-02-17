"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
// class for the User objects that will be stored in "database"
class User {
    constructor(UserID, FirstName, LastName, EmailAddress, _password) {
        this.UserID = UserID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.EmailAddress = EmailAddress;
        this._password = _password;
    }
}
let app = express_1.default();
let server = http_1.default.createServer(app);
const port = 8000;
// global array of Users
let userArray = [];
app.use(body_parser_1.default.urlencoded);
// default route, links to help page
app.get("/");
app.post("/User", (req, res, next) => {
    res.status(200).send('<form method="POST"><input type="text" name="Name"');
});
// route for GET method to return all users in the database
app.get("/Users", (req, res, next) => {
    // return an array of all users in the database
    console.log(req.body);
    res.send();
});
server.listen(port);
//# sourceMappingURL=index.js.map