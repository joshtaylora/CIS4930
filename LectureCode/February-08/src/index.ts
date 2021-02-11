// typescript doesn't recognize node or express natively so we have to install @types/node and @types/express
import http, { IncomingMessage, ServerResponse } from "http";
import express from 'express';
import fs from 'fs';


// creates an express application
let app = express(); // is itself a reqListener
let server = http.createServer(app); // now all requests are handled by the express app
// takes as arguement a request handler

// use app.get for get method
// use app.post for post method for the same url with same parameters as above

app.use('/Students/:fName/:lName', (req, res, next) =>
{
  console.log(req.url);
  res.send({firstName: req.params.fName, lastName: req.params.lName});
});

app.use('/Students/:nNumber', (req, res, next) =>
{
  console.log(req.url);
  res.send(`<h1>Hello, Student</h1> <h2>N-Number: ${req.params.nNumber}</h2>`);
});

app.use('/Students', (req, res, next) => 
{
  console.log(req.url);
  // the express instance (app) sits in the middle between node (and http requests) and our application
  // this means we can register different parameters
  res.send("Hello, Student"); // automatically sends and ends
});


app.use('/', (req, res, next) =>
{
  console.log(req.url);
  res.status(404).send("Sorry, page not found!");
});

server.listen(3000); // listen on port 3000


// // create request listener for server usage
// function reqListener(req: IncomingMessage, res: ServerResponse) {
//   switch (req.url) {
//     case "/Students":
//       { // routes /Students endpoint
//         res.write("Hello, Student");
//         res.end();
//       }
//       break;
//     case "/Teachers":
//       { // routes /Teachers endpoint
//         res.write("Hello, Teacher");
//         res.end();
//       }
//       break;
//     default:
//       {
//         res.statusCode = 404;
//         res.end();
//       }
//       break;
//   }
// }

// let server = http.createServer(reqListener);
// server.listen(3000);
