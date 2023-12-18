const express = require('express')
const server = express();


server.get('/', (req, res) => {
    return res.send('Welcome to Express.')
});

// accessing static file directly
server.use(express.static('public'))



server.listen(3300, () => {
    console.log('Server listening on port 3300');
});