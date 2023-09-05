"use strict";

const PORT = process.argv[2]
const FILEPATH = process.argv[3]
const HOST = '127.0.0.1'


const http = require('http');
const filesystem = require("fs")
const reader = filesystem.createReadStream(FILEPATH);
  
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    reader.on('data', function (chunk) {
        res.end(chunk.toString());
    });
});

server.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}/`);
});
