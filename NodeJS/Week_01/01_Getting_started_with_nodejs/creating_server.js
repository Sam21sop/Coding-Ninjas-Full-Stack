// 1. import http lib/module
const { log } = require('console');
const http = require('http')

// 2. create a server
const server = http.createServer((req, res) => {
    //here come the request
    res.end('welcome to Nodejs Ninjas server');
});

//3. specify unique port number to listen client's request
server.listen(7777, () => {
    console.log("server is listening on port 7777");    // confirmation msg
});


// confirmation msg
// console.log("server is listening on port 7777");