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
  console.log('new connection id:', socket.id);
});
