import express from 'express';
import { Book } from '../models/book';
import { Librarians } from '../models/librarian';
import { librariansArray } from './booksRoute';
const librarianRouter = express.Router();

librarianRouter.post('/:usreName/:password', (req, res, next)=>
{
	let found:boolean = false;
	for (let i = 0; i < librariansArray.length; i++)
	{
		if (librariansArray[i].userName === req.params.userName && librariansArray[i].password === req.params.password)
		{
			// user has been authenticated
			found = true;
			res.send();
			break;
		}
	}
	if(!found)
	{
		res.status(401).send('Bad username or password!');
	}
});

export {librarianRouter}