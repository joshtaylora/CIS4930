import express from "express";
import bodyparser from "body-parser";
import { Book } from "../models/book";

const booksRouter = express.Router();

let bookArray: Book[] = [];

bookArray.push(new Book("Sherlock Holmes", "Sir Arthur Conan Doyle"));
bookArray.push(new Book("The Origin of Species", "Charles Darwin"));

// ------------------------------------------------------------------------
// get req received on /Books/
booksRouter.get("/", (req, res, next) => {
  console.log("ROUTE /");
  res.status(200).send(bookArray);
});
// ------------------------------------------------------------------------
// post req received on /Books/
booksRouter.post("/", (req, res, next) => {
  // use body parser to get the title and author from the request body
  bookArray.push(new Book(req.body.title, req.body.author));
  // send Created status code and return the last book in the array
  res.status(201).send(bookArray[bookArray.length - 1]);
});
// ------------------------------------------------------------------------
// patch req
booksRouter.patch("/", (req, res, next) => {
  let title = req.body.title;
  let author = req.body.author;
  let i: number = 0;
  let foundBook: Book | null = null;

  for (; i < bookArray.length; i++) {
    if (bookArray[i].title === title && bookArray[i].author === author) {
      foundBook = bookArray[i];

      foundBook.description = req.body.description;
      foundBook.coverImageUrl = req.body.coverImageUrl;
      break;
    }
  }
  if (foundBook === null) {
    res
      .status(404)
      .send({ message: `Book '${title}' by '${author}' Not Found` });
  } else {
    // 202 means request accepted for precessing but not completed
    // 200 means everything is A-OK
    res.status(200).send(foundBook);
  }
});

booksRouter.delete('/:id',(req, res, next) => {
  let bookId = +req.params.id;
  let selectedIndex = -1;
  for(let i = 0; i < bookArray.length; i++)
  {
    if (bookArray[i].id == bookId)
    {
      selectedIndex = i;
      break;
    }
  }
  if(selectedIndex >= 0)
  {
    bookArray = bookArray.splice(selectedIndex, 1);
    res.status(204).send('');
  }
  else
  {
    res.status(404).send('Book not found');
  }
});

// ------------------------------------------------------------------------
booksRouter.patch("/:id", (req, res, next) => {
  let title = req.body.title;
  let author = req.body.author;
  let i: number = 0;
  let foundBook: Book | null = null;

  for (; i < bookArray.length; i++) {
    // if the current book we are looking at in the array is equal to the id...
    if (bookArray[i].id === +req.params.id) {
      foundBook = bookArray[i];

      foundBook.description = req.body.description;
      foundBook.coverImageUrl = req.body.coverImageUrl;
      break;
    }
  }
  if (foundBook === null) {
    res
      .status(404)
      .send({ message: `Book '${title}' by '${author}' Not Found` });
  } else {
    // 202 means request accepted for precessing but not completed
    // 200 means everything is A-OK
    res.status(200).send(foundBook);
  }
});

export { booksRouter };
export { bookArray };
