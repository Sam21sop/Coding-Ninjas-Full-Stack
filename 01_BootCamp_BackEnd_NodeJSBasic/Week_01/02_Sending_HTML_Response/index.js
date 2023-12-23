// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
// 1. import required module/lib
const http = require('http')
const fs = require('fs')

// 2. create a server
const server = http.createServer((req, res) => {
    const data = fs.readFileSync('./index.html');
    res.end(data);
})

server.listen(8080);

module.exports = server;
