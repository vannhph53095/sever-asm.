const http = require('node:http');
const hostname = '127.0.0.1'; //localhost
const port = 3003;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<h1>Lab2 - NodeJS - MD19304</h1>');
    res.write('<br>');
    res.write('<p style="color: red;font-size: large;">Nội dung đoạn văn bản</p>');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
