"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const booksRoute_1 = require("../routes/booksRoute");
class Book {
    constructor(title, author) {
        if (booksRoute_1.bookArray.length >= 1) {
            this.id = booksRoute_1.bookArray[booksRoute_1.bookArray.length - 1].id + 1;
        }
        else {
            this.id = 1;
        }
        this.title = title;
        this.author = author;
        this.description = '';
        this.coverImageUrl = '';
    }
}
exports.Book = Book;
//# sourceMappingURL=book.js.map