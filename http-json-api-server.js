const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const isoTime = parsedUrl.query.iso;
  let responseData;

  if (parsedUrl.pathname === '/api/parsetime') {
    const date = new Date(isoTime);
    responseData = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  } else if (parsedUrl.pathname === '/api/unixtime') {
    responseData = {
      unixtime: Date.parse(isoTime),
    };
  } else {
    response.writeHead(404);
    response.end();
    return;
  }

  response.setHeader('Content-Type', 'application/json');

  response.end(JSON.stringify(responseData));
});

const PORT = process.argv[2] || 3000;

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
