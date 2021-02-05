"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var server = http_1.default.createServer(serverReq);
function serverReq(req, res) {
    console.log(req);
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello, World!</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end;
}
// standard port to listen on in development is port 3000
// to test in browser navigate to http://localhost:3000
server.listen(3000);
//# sourceMappingURL=server.js.map