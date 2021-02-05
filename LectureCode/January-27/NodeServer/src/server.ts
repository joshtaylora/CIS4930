import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer(serverReq);

function serverReq(req:IncomingMessage, res:ServerResponse)
{
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