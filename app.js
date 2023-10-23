require('dotenv').config();
const Server = require('./Models/server.js');

const server = new Server();
server.listen();