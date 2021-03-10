"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.librariansArray = exports.bookArray = exports.booksRouter = void 0;
var express_1 = __importDefault(require("express"));
var book_1 = require("../models/book");
var librarian_1 = require("../models/librarian");
var booksRouter = express_1.default.Router();
exports.booksRouter = booksRouter;
var bookArray = [];
exports.bookArray = bookArray;
var librariansArray = [];
exports.librariansArray = librariansArray;
librariansArray[0] = new librarian_1.Librarians(1, 'jose', 'jose');
bookArray.push(new book_1.Book(1, 'Sherlock Holmes', 'Sir Arthur Connandolyle'));
bookArray[0].coverImageUrl = 'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/08/The-Crying-Book-by-Heather-Christie-1.jpg';
bookArray[0].description = "Awesome book #3";
bookArray.push(new book_1.Book(2, 'The Origin of Spiecies', 'Darwin'));
bookArray[1].coverImageUrl = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417570l/22463.jpg';
bookArray[1].description = "Evolutinon!";
//When a Get Request is Received on /Books
booksRouter.get('/', function (req, res, next) {
    res.status(200).send(bookArray);
});
//When a POST Request is Received on /Books
booksRouter.post('/', function (req, res, next) {
    var lastBook = bookArray[bookArray.length - 1].id;
    bookArray.push(new book_1.Book(++lastBook, req.body.title, req.body.author));
    res.status(201).send(bookArray[bookArray.length - 1]);
});
booksRouter.delete('/', function (req, res, next) {
    var bookId = +req.body.bookId;
    var selectedIndex = -1;
    for (var i = 0; i < bookArray.length; i++) {
        if (bookArray[i].id === bookId) {
            selectedIndex = i;
            break;
        }
    }
    if (selectedIndex >= 0) {
        exports.bookArray = bookArray = bookArray.splice(selectedIndex, 1);
        res.status(204).send('');
    }
    else {
        res.status(404).send('Book not Found');
    }
});
booksRouter.patch('/:id', function (req, res, next) {
    var title = req.body.title;
    var author = req.body.author;
    var foundBook = null;
    for (var i = 0; i < bookArray.length; i++) {
        if (bookArray[i].id === +req.params.id) {
            foundBook = bookArray[i];
            foundBook.description = req.body.description;
            foundBook.coverImageUrl = req.body.coverImageUrl;
            break;
        }
    }
    if (foundBook === null) {
        res.status(404).send({ message: " " + title + "-" + author + " Book was Not Found!" });
    }
    else {
        res.status(200).send(foundBook);
    }
});
//# sourceMappingURL=booksRoute.js.map