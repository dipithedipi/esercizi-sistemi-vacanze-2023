const http = require('http');

const PORT = process.argv[2]
const HOST = '127.0.0.1'


const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';

    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(String(data).toUpperCase());
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Metodo non consentito');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server in ascolto su http://${HOST}:${PORT}/`);
});
