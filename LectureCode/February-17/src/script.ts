import express from 'express';
import bodyparser from 'body-parser';
import path from 'path';
import { booksRouter } from './routes/booksRoute';

let app = express();

const port = 3000;

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json);
// public endpoint that will be the first endpoint that is checked
app.use(express.static( path.join( process.cwd(), 'public')));

app.use('/Books', booksRouter);

app.use('/', (req, res, next) => {
	res.status(404).send('Error, page not found');
});

app.listen(port);

