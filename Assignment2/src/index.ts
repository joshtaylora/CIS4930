import http from "http";
import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { exit } from "process";
import { userArray } from "./routes/UserRoutes";
import { userRouter } from "./routes/UserRoutes";
import { User } from "./models/User"


// console.log(path.join(process.cwd(), "views", "help.html"));

// create the express application
let app = express();

app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json);

app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/User', userRouter);

app.get("/", (req, res, next) => {
  console.log(req.url);
  res.sendFile(path.join(process.cwd(), "views", "help.html"));
  // res.send('<h1>Help Page</h1><form method="POST"><input type="text" name="Name"/><input type="submit"/></form>');
});

app.get("/Users", (req, res, next) => {
  console.log(userArray.toString);
  res.send(JSON.parse(JSON.stringify(userArray)));
});


app.listen(3000);
