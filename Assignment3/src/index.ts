import http from "http";
import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { exit } from "process";
import sqlite3 from 'sqlite3';

import { userDB} from "./routes/UserRouter";
import { userRouter } from "./routes/UserRouter";
import { postRouter } from "./routes/PostRouter";

// use the custom sqlite interface with the database
let sqlite = require("./modules/sqlite3");


// export const ACCESS_TOKEN_SECRET = ;
// console.log(path.join(process.cwd(), "views", "help.html"));

// create the express application
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.static(path.join(process.cwd(), 'public')));
// use the user router
app.use('/Users', userRouter);
app.use('/Posts', postRouter);

app.get("/", (req, res, next) => {
  console.log(req.url);
  res.sendFile(path.join(process.cwd(), "views", "help.html"));
  // res.send('<h1>Help Page</h1><form method="POST"><input type="text" name="Name"/><input type="submit"/></form>');
});

app.get("/Users", (req, res, next) => {
  console.log(userDB.toJSON());
  res.type('json').send(userDB.toJSON());
});

app.listen(3000);

export { sqlite }