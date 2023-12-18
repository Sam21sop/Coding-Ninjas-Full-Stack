// 1/ importing rquired module
const http = require('http')
const fs = require('fs');
const { log } = require('console');


// 2. creating server
const server = http.createServer((req, res) => {
    const data = fs.readFileSync('./index.html').toString();
    res.end(data);
})


// 3. specify port
server.listen(8080)