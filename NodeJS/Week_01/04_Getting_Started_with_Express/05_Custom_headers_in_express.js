const express = require('express')
const server = express();


server.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain')   // setting headers in express
    res.end('Hello world! This is an Express Js server.')
});


server.post('/', (req, res) => {
    res.status(201).send('Post request received.')
})


server.listen(8080, ()=> {
    console.log('server listen on port 8080...');
});
