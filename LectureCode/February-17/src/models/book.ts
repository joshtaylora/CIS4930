import { bookArray } from "../routes/booksRoute";

class Book {
	id:number;
	title:string;
	description:string;
	author:string;
	coverImageUrl:string;

	constructor(title:string, author:string)
	{
		if(bookArray.length >= 1)
		{
			this.id = bookArray[bookArray.length -1].id + 1;
		}
		else
		{
			this.id = 1;
		}
		this.title = title;
		this.author = author;
		this.description = '';
		this.coverImageUrl = '';
	}
}

export {Book}