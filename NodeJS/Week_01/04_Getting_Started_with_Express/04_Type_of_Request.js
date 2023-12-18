const express = require('express')

const server = express();

// GET request
server.get('/', (req, res) => {
    res.send('This is a GET request.')
});


// POST request
server.post('/', (req, res) => {
    res.send('This is a POST request.')
});


// PUT request
server.put('/', (req, res) => {
    res.send('This is a PUT request.')
});


// DELETE request
server.delete('/', (req, res) => {
    res.send('This is a DELETE request.')
});


server.listen(8080, ()=>{
    console.log('Server listing on 8080');
})