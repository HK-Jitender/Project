"use strict";

var rootSocket = function rootSocket(io) {
  io.on('connection', function (socket) {
    console.log('New connection');
    socket.on('join-room', function (room) {
      console.log('join room for', room);
      socket.join(room);
    });
    socket.on('disconnect', function () {
      console.log('disconnected');
      console.log(socket.rooms.size);
    });
  });
  return io;
};
module.exports = rootSocket;