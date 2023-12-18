import ProductController from './src/controller/product.controller.js';
import express from 'express';
const server = express();

// create instance of ProductController
const productController = new ProductController();
server.get('/', productController.getProduct)


server.get('/home', (req, res) => {
    return res.send('Welcome to inventory App')
})


server.listen(8080, () => {
    console.log('server listining on port 8080');
})
