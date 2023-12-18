const express = require('express')

const server = express();

function firstMiddleware(req, res, next) {
   console.log('This is first middleware.'); 
   next();
};

function secondMiddleware(req, res, next) {
    console.log('This is second middleware.'); 
    next();
 }; 

function globalMiddleware(req, res, next) {
    console.log('This is Application-level middleware.'); 
    next();
}

// application-level middleware going to be execute all request
server.use(globalMiddleware)

// route-level middleware going to be execute for send request
server.get('/middlewares', [firstMiddleware, secondMiddleware], (req, res) => {
    res.send('Hello world! This is express js middleware')
})

server.get('/', (req, res) => {
    res.send('Hello world! This is express server')
})

server.listen(3000, ()=>{
    console.log('server listening on 3000');
})