const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


server.listen(3000);

app.use(express.static(`${__dirname}/dist`));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

io.on('connection', (socket) => {
  const clients = Object.keys(io.sockets.sockets);

  if (clients.length > 2) {
    // we should only allow 2 users in each chat
    console.log('Room is full');
    socket.emit('room_full', { message: 'Chat full!' });
    socket.disconnect();
  } else {
    // do something
  }
});
