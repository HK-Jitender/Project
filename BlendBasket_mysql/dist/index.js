"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
var _config = _interopRequireDefault(require("./config/config.js"));
var _http = _interopRequireDefault(require("http"));
var _socket = require("socket.io");
require("./cronJobs.js");
require("./config/rootSocket.js");
// Use .js extension
// Use .js extension
// Use ES module import
// Import Socket.io as an ES module

console.log('Hello Node-Express-Mysql with Sequelize Boilerplate!!');
// Import cron jobs (ensure this is an ES module)

// Socket initialization
var server = _http["default"].createServer(_app["default"]);

// Initialize socket.io
var io = new _socket.Server(server, {
  cors: {
    origin: '*'
  }
});
global.io = io;
// Import the root socket configuration

// Start the server
server.listen(_config["default"].port, function () {
  console.log('SERVER');
  console.log("Listening to port ".concat(_config["default"].port));
});