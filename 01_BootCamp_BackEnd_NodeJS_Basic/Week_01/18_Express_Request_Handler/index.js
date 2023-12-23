// Please don't change the pre-written code

const express = require("express");
const server = express();

// Write your code here
// GET request
server.get('/', (req, res) => {
    res.send('get')
});


// POST request
server.post('/', (req, res) => {
    res.send('post')
});


// PUT request
server.put('/', (req, res) => {
    res.send('put')
});


// DELETE request
server.delete('/', (req, res) => {
    res.send('delete')
});


module.exports = server;
