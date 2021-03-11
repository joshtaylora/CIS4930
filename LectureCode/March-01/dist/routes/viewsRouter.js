"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewsRouter = void 0;
var express_1 = __importDefault(require("express"));
var booksRoute_1 = require("../routes/booksRoute");
var viewsRouter = express_1.default.Router();
exports.viewsRouter = viewsRouter;
viewsRouter.get("/index", function (req, res, next) {
    res.render('index', { books: booksRoute_1.bookArray });
});
//# sourceMappingURL=viewsRouter.js.map