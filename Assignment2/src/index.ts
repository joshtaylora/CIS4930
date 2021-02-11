import http from 'http';
import express from 'express';

// create the express application
let app = express();

let server = http.createServer(app);

/**
 * Endpoints for api
 */

 app.use('/', (req, res, next) => 
 {
	console.log(req.url);
	res.send("<h1>Help Page</h1>");
 });


 app.use('/Users', (req, res, next) => 
 {
	console.log(req.url);
	res.send("<h1>Users endpoint</h1>");
 });
 
 
 server.listen(3000);