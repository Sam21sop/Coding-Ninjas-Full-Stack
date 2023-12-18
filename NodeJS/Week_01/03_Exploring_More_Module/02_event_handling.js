// create server by using http protocols
const { log } = require('console')
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        // expecting data from client
        // console.log(req.body); // undefined
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString()
        });

        req.on('end', ()=> {
            console.log(body);
            res.end('Data is received.')
        })
    } else{
        res.end("welcome to node js")
    }
});

port = 8080
server.listen(port)
console.log(`server listening on ${port}`);