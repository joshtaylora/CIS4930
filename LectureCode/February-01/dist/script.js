"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
/* Async code demonstration*/
console.log("Hello,");
// the following console.log statement does not get run until 1000ms has transpired
setTimeout(() => {
    console.log("Async Message");
}, 1000);
console.log("world!");
/**
 * http server demo
 */
const server = http_1.default.createServer(reqListener);
function reqListener(req, res) {
    if (req.url === "/") {
        console.log(req.url);
        res.write('<html>');
        res.write('<body>');
        res.write(`<h1>Hello, welcome!</h1>`);
        // the Action parameter sends the data to a new url called Data
        res.write('<form method="POST" Action="Data">');
        res.write('<label for="txtName">Enter your name here: </form>');
        res.write('<input type="text" name="txtName" id="txtName">');
        res.write('<input type="submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.statusCode = 200;
        res.end();
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