const path = require('path');
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const socketHanlding = require('./socketHandling');

const PORT = process.env.port || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
socketio.listen(server);
const io = socketio(server);
socketHanlding(io);

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(router);

server.listen(PORT, () => console.log(`server has started on port: ${PORT}`));