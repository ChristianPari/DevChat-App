const path = require('path');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const http = require('http').Server(app);
const socketHanlding = require('./socketHandling');

const PORT = process.env.port || 5000;

const router = require('./router');


const buildPath = path.join(__dirname, '..', 'build');
app.use(router);
app.use(express.static(buildPath));

const server = http;
const io = socketio(server);
socketHanlding(io);

server.listen(PORT, () => console.log(`server has started on port: ${PORT}`));