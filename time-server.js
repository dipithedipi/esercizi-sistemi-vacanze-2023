"use strict"

const PORT = process.argv[2]

const now = new Date();

function getDate() {
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}\n`;
}

const net = require('net');
const server = net.createServer(socket => {
  socket.setEncoding('utf-8');

  socket.write(getDate());
  socket.destroy();
  
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const host = '127.0.0.1';
server.listen(PORT, host, () => {
  console.log(`Server is listening on ${host}:${PORT}`);
});
