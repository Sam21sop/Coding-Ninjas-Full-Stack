// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
//1. importing module
const http = require('http')

//2. creating server
const server = http.createServer((req, res) => {
    res.end("Response received at port 8080")
})

//3. specify port to listen client's request
server.listen(8080)

module.exports = server;

