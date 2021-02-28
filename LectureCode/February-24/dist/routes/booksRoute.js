"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookArray = exports.booksRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_1 = require("../models/book");
const booksRouter = express_1.default.Router();
exports.booksRouter = booksRouter;
let bookArray = [];
exports.bookArray = bookArray;
bookArray.push(new book_1.Book(1, 'Sherlock Holmes', 'Sir Arthur Connandolyle'));
bookArray.push(new book_1.Book(2, 'The Origin of Spiecies', 'Darwin'));
//When a Get Request is Received on /Books
booksRouter.get('/', (req, res, next) => {
    res.status(200).send(bookArray);
});
//When a POST Request is Received on /Books
booksRouter.post('/', (req, res, next) => {
    let lastBook = bookArray[bookArray.length - 1].id;
    bookArray.push(new book_1.Book(++lastBook, req.body.title, req.body.author));
    res.status(201).send(bookArray[bookArray.length - 1]);
});
booksRouter.patch('/:id', (req, res, next) => {
    let title = req.body.title;
    let author = req.body.author;
    let foundBook = null;
    for (let i = 0; i < bookArray.length; i++) {
        if (bookArray[i].id === +req.params.id) {
            foundBook = bookArray[i];
            foundBook.description = req.body.description;
            foundBook.coverImageUrl = req.body.coverImageUrl;
            break;
        }
    }
    if (foundBook === null) {
        res.status(404).send({ message: ` ${title}-${author} Book was Not Found!` });
    }
    else {
        res.status(200).send(foundBook);
    }
});
//# sourceMappingURL=booksRoute.js.map