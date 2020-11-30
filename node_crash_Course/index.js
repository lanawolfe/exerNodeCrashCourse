//const Logger = require('./logger');
//const logger = new Logger();

//logger.on('message', data => console.log('Called listener', data));

//logger.log('hello world');
//logger.log('hi');
//logger.log('hello');


//console.log('Hello From Node.JS...');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
if(req.url === '/'){
    res.end('<h1>HOMEPAGE</h1>');
}
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>console.log(`server running on port ${PORT}`));