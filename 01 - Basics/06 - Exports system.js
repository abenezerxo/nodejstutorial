const http = require('http');

const routes = require('../02 - Improved Dev workflow and Debugging/routes');

const server = http.createServer(routes);

server.listen(3000);