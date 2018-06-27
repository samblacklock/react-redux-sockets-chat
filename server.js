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
  const clients = io.sockets.sockets;
  const clientIds = Object.keys(clients);

  if (clientIds.length > 2) {
    // we should only allow 2 users in each chat
    console.log('Room is full');
    socket.emit('room_full', { message: 'Chat full!' });
    socket.disconnect();
  } else {
    // broadcast new user to all but sender
    const user = JSON.parse(socket.handshake.query.user);
    const userModel = { id: socket.id, ...user };
    socket.user = userModel;
    socket.broadcast.emit('new_user', userModel);

    // tell new user about the other if logged on
    const otherUser = clientIds.filter(c => c !== socket.id)[0];
    const otherUserData = clients[otherUser] && clients[otherUser].user;
    if (otherUserData) socket.emit('new_user', { ...otherUserData });

    // listen for new messages
    socket.on('message', (data) => {
      io.emit('message', { ...data });
    });
  }
});
