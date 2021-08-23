const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const socketHanlding = require('./socketHandling');

const PORT = process.env.port || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
socketHanlding(io);

app.use(router);

server.listen(PORT, () => console.log(`server has started on port: ${PORT}`));