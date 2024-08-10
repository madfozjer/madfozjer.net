const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const htmlPath = 'src/index.html';
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(htmlPath).pipe(res);
}).listen(8080);
