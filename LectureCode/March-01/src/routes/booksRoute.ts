import express from 'express';
import { Book } from '../models/book';
import { Librarians } from '../models/librarian';

const booksRouter = express.Router();

let bookArray:Book[]=[];

let librariansArray:Librarians[] = [];
librariansArray[0] = new Librarians(1, 'jose', 'jose');


bookArray.push(new Book(1,'Sherlock Holmes','Sir Arthur Connandolyle'));
bookArray[0].coverImageUrl='https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/08/The-Crying-Book-by-Heather-Christie-1.jpg';
bookArray[0].description="Awesome book #3";

bookArray.push(new Book(2,'The Origin of Spiecies','Darwin'));
bookArray[1].coverImageUrl='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1298417570l/22463.jpg';
bookArray[1].description="Evolutinon!";

//When a Get Request is Received on /Books
booksRouter.get('/',(req,res,next)=>{
    res.status(200).send(bookArray);
});



//When a POST Request is Received on /Books
booksRouter.post('/',(req,res,next)=>{

    let lastBook = bookArray[bookArray.length-1].id;
    bookArray.push(new Book(++lastBook,req.body.title,req.body.author));

    res.status(201).send(bookArray[bookArray.length-1]);
});

booksRouter.delete('/',(req,res,next)=>{
    let bookId = +req.body.bookId;
    let selectedIndex =-1;
    for(let i=0;i<bookArray.length;i++)
    {
        if(bookArray[i].id=== bookId)
        {
            selectedIndex = i;
            break;
        }
    }
    if(selectedIndex>=0)
    {
        bookArray=bookArray.splice(selectedIndex,1);
        res.status(204).send('');
    }
    else
    {
        res.status(404).send('Book not Found');
    }

 } );



booksRouter.patch('/:id',(req,res,next)=>{

    let title = req.body.title;
    let author = req.body.author;
    let foundBook:Book|null=null;
    
    for(let i=0;i<bookArray.length;i++)
    {
        if(bookArray[i].id=== +req.params.id)
        {
            foundBook = bookArray[i];
            foundBook.description = req.body.description;
            foundBook.coverImageUrl = req.body.coverImageUrl;
            break;
        }
    }
    if(foundBook===null)
    {
        res.status(404).send({message:` ${title}-${author} Book was Not Found!`});
        
    }
    else
    {
        res.status(200).send(foundBook);
    }
});



export {booksRouter}
export {bookArray}
export {librariansArray}