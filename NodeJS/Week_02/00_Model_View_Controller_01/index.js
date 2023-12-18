import express from 'express';
const server = express();
server.get('/', (req, res) => {
    return res.send('Welcome to inventory App')
})

server.listen(8080, () => {
    console.log('server listining on port 8080');
})
