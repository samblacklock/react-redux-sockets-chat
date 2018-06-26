const express = require('express');

const app = express();
const server = require('http').Server(app);
server.listen(3000);

app.use(express.static(`${__dirname}/dist`));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});
