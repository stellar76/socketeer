const express = require('express');
const app = express();
const server = app.listen(54215, '0.0.0.0', function () {
    console.log('server running on port 54215');
});
const io = require('socket.io')(server);
io.on('connection', function (socket) {
    const address = socket.handshake.address
    console.log(address);
});