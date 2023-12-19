import path from 'path';
import ProductController from './src/controller/product.controller.js';
import express from 'express';

const server = express();

// setup view engine
server.set('view engine', "ejs")
//set path
server.set("views", path.join(path.resolve(),"src", "views"))

// create instance of ProductController
const productController = new ProductController();
server.get('/', productController.getProduct)


// server.get('/home', (req, res) => {
//     return res.send('Welcome to inventory App')
// })


server.listen(8080, () => {
    console.log('server listining on port 8080');
})
