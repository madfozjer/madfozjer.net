const http = require('http');
const fs = require('fs');

console.log('server is online');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('src/index.html', function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write('Error: File Not Found')
        } else {
            res.write(data);
        }
        res.end();
    })
}).listen(8080);
