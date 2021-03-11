import express from 'express';
import { booksRouter } from './routes/booksRoute';
import bodyParser from 'body-parser';
import path from 'path';
import { viewsRouter } from './routes/viewsRouter';

let app = express();

// app.engine allows you to specify what type of engine you want to register
//  -> give it a name that will be set as the view engine



app.set('view engine','ejs');
app.set('views','src/views');



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(express.static( path.join(process.cwd(),'public')));

app.use('/Books',booksRouter);
app.use('/Pages',viewsRouter);
app.use(/)
app.use('/',(req,res,next)=>{
    res.status(404).send(`Sorry page not found!`);
});
app.listen(3000);