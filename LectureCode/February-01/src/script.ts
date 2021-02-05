import http, { IncomingMessage, ServerResponse } from 'http'
import fs from 'fs';
import path from 'path';

// /* Async code demonstration*/
// console.log("Hello,");
// // the following console.log statement does not get run until 1000ms has transpired
// setTimeout( () => {
// 	console.log("Async Message");
// }, 1000);

// console.log("world!")

console.log(process.cwd());
// print the html 
// console.log(myHtmlData.toString());

const server = http.createServer(reqListener);

function reqListener(req: IncomingMessage, res: ServerResponse)
 {
	if (req.url === "/")
	{
		// anything that happens inside this will take a while, so return the promise and start executing busy work and then resolve
		// when it's finished
		let myBusyWork = new Promise((resolve,reject) =>
		{
			fs.readFile(path.join(process.cwd(), 'views', 'index.html'), (err,data:Buffer)=> { // err is the node error, data is the data buffer
				if (err!==null)
				{
					reject(err); // reject promise if there is an error
				}
				else
				{
					resolve(data);
				}

			});
		});
		myBusyWork.then((data)=>
		{
			let dataBuffer = data as Buffer;
			res.write(dataBuffer.toString());
			res.statusCode = 200;
			res.end();
		});

	}
	else if (req.url === '/Data')
	{
		// this occurs when info is coming in from a POST request

		const body: any[] = [];

		// event binding
		// data is an event for when we receive data from the request
		req.on('data', (chunk) => {
			// console.log(chunk);
			body.push(chunk);
			console.log(body);
		});

		let userName = '';

		// end event happens when there is no more communication from the request
		req.on('end', () => {
			console.log(`Raw body: ${body}`);
			let parsedBody: string =  Buffer.concat(body).toString();

			userName = parsedBody.split('&')[0].split('=').toString();
			// console.log(formData);
			
			console.log(`string body: ${parsedBody}`);
			console.log(`userName: ${userName}`);
		});
		
		res.write('<html>');
		res.write('<body>');
		res.write(`<h1>Hello, welcome ${userName}</h1>`);
		res.write('</body>');	
		res.write('</html>');
		res.statusCode = 200;
		res.end();
	}
	else
	{
		res.statusCode = 404;
		res.end();
	}	
 }

server.listen(3000);