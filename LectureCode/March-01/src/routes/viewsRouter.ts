import express from 'express';
import { Book } from '../models/book';
import {bookArray} from '../routes/booksRoute';

const viewsRouter = express.Router();

viewsRouter.get("/index", (req,res,next)=>{
    res.render('index', {books:bookArray});
});

export {viewsRouter};