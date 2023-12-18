const express = require('express')

const server = express();

server.get('/', 
// first middleware
(req, res, next) => {
    console.log('First middle ware')
    next()
},

// second middleware
(req, res) => {
    res.send('second middleware')
});

server.listen(3000, ()=> {
    console.log('server is listening on 3000');
})