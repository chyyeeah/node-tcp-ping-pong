const net = require('net');

const server = net.createServer(socket => {
  socket.on('connect', () => console.log('connected'));
  socket.on('data', (data) => {
    console.log(data.toString().trim());
    if (data.toString().trim() === 'ping') {
      socket.write('pong\n');
    } else {
      socket.end();
    }
  });
});

process.stdin.on('data', (data) => {
  const port = parseInt(data.toString().trim());
  const socket = net.connect(port, 'localhost', () => {
    socket.write('ping\n', () => process.stdout.write(`SUCCESS ${port}\n`));
  });
  socket.on('data', data => process.stdout.write(`${data.toString().trim()}\n`));
  socket.on('error', () => process.stdout.write(`FAIL ${port}\n`));
});

const PORT = process.argv[2] || 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));