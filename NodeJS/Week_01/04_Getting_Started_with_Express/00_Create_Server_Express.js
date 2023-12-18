// import epress module
const express = require('express')

// create server
const server = express();

// handle default request
server.get('/', (req, res) => {
    res.send("welcome to Express server.")
});

// listen on specific port 
port = 3100;
server.listen(port, ()=> {
    console.log(`Server is listening on ${port}`);
});