"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.librarianRouter = void 0;
var express_1 = __importDefault(require("express"));
var booksRoute_1 = require("./booksRoute");
var librarianRouter = express_1.default.Router();
exports.librarianRouter = librarianRouter;
librarianRouter.post('/:usreName/:password', function (req, res, next) {
    var found = false;
    for (var i = 0; i < booksRoute_1.librariansArray.length; i++) {
        if (booksRoute_1.librariansArray[i].userName === req.params.userName && booksRoute_1.librariansArray[i].password === req.params.password) {
            // user has been authenticated
            found = true;
            res.send();
            break;
        }
    }
    if (!found) {
        res.status(401).send('Bad username or password!');
    }
});
//# sourceMappingURL=librariansRoute.js.map