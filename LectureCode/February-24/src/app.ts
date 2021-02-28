import express from 'express';
import { booksRouter } from './routes/booksRoute';
import bodyParser from 'body-parser';
import path from 'path';

let app = express();
// use pug templating engine
app.set('view engine', 'pug');
// tell pug where the template views are
app.set('views', 'src/views')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static( path.join(process.cwd(),'public')));

app.use('/Books',booksRouter);

app.use('/',(req,res,next)=>{
    res.status(404).send(`Sorry page not found!`);
});

app.listen(3000);