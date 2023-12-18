// 1. import required module
const http = require('http')

// 2. creating server
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url == "/user") {
        res.end("this is user page");
    } else if (req.url == '/account'){
        res.end("this is account page");
    } else {
        res.end('Welcome to developer')
    } 
})


// 3. specify port to listen client request
server.listen(8080, () => {
    console.log("server is listening at port 8080...");
})
