"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_1 = require("../models/book");
const booksRouter = express_1.default.Router();
exports.booksRouter = booksRouter;
let bookArray = [];
bookArray.push(new book_1.Book('Sherlock Holmes', 'Sir Arthur Conan Doyle'));
bookArray.push(new book_1.Book('The Origin of Species', 'Charles Darwin'));
// get req received on /Books/
booksRouter.get('/', (req, res, next) => {
    res.status(200).send(bookArray);
});
// post req received on /Books/
booksRouter.post('/', (req, res, next) => {
    // use body parser to get the title and author from the request body
    bookArray.push(new book_1.Book(req.body.title, req.body.author));
    // send Created status code and return the last book in the array
    res.status(201).send(bookArray[bookArray.length - 1]);
});
// patch req
booksRouter.patch('/', (req, res, next) => {
    let title = req.body.title;
    let author = req.body.author;
    let i = 0;
    let foundBook = null;
    for (; i < bookArray.length; i++) {
        if (bookArray[i].title === title && bookArray[i].author === author) {
            foundBook = bookArray[i];
            foundBook.description = req.body.description;
            foundBook.coverImageUrl = req.body.coverImageUrl;
            break;
        }
    }
    if (foundBook === null) {
        res.status(404).send({ message: `Book '${title}' by '${author}' Not Found` });
    }
    else {
        // 202 means request accepted for precessing but not completed
        // 200 means everything is A-OK
        res.status(200).send(foundBook);
    }
});
//# sourceMappingURL=booksRotue.js.map