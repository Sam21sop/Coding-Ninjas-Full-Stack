const { log } = require('console');
const http = require('http')

const server = http.createServer((req, res) => {
    res.write('this is comming from NodeJs server. ')

    console.log(req.url); // debugging

    if(req.url == '/first')
    {
        return res.end('this is first response') // stop the execution of function
    } // add else block to avoid error

    res.end('hello from node js')
});

const PORT = 3000
server.listen(PORT, (req, res) => {
    console.log(`server listing at ${PORT}`);
});
