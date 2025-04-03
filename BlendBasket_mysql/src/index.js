import app from './app.js';  // Use .js extension
import config from './config/config.js';  // Use .js extension
import http from 'http';  // Use ES module import
import { Server } from 'socket.io';  // Import Socket.io as an ES module

console.log('Hello Node-Express-Mysql with Sequelize Boilerplate!!');
import './cronJobs.js';  // Import cron jobs (ensure this is an ES module)

// Socket initialization
const server = http.createServer(app);

// Initialize socket.io
const io = new Server(server, { cors: { origin: '*' } });

global.io = io;
import './config/rootSocket.js';  // Import the root socket configuration

// Start the server
server.listen(config.port, () => {
    console.log('SERVER');
    console.log(`Listening to port ${config.port}`);
});
