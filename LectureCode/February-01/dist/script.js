"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
const server = http_1.default.createServer(reqListener);
function reqListener(req, res) {
    if (req.url === "/") {
        // anything that happens inside this will take a while, so return the promise and start executing busy work and then resolve
        // when it's finished
        let myBusyWork = new Promise((resolve, reject) => {
            fs_1.default.readFile(path_1.default.join(process.cwd(), 'views', 'index.html'), (err, data) => {
                if (err !== null) {
                    reject(err); // reject promise if there is an error
                }
                else {
                    resolve(data);
                }
            });
        });
        myBusyWork.then((data) => {
            let dataBuffer = data;
            res.write(dataBuffer.toString());
            res.statusCode = 200;
            res.end();
        });
    }
    else if (req.url === '/Data') {
        // this occurs when info is coming in from a POST request
        const body = [];
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
            let parsedBody = Buffer.concat(body).toString();
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
    else {
        res.statusCode = 404;
        res.end();
    }
}
server.listen(3000);
//# sourceMappingURL=script.js.map