import express from 'express';
import ejsLayout from'express-ejs-layouts';
import path from 'path';
import ProductController from './src/contrllers/product.controller.js';


// create server
const server = express();

// setup view engine setting
server.set('view engine', 'ejs')
server.set('views', path.join(path.resolve(), 'src', 'views'))

// add middleware
server.use(ejsLayout)

// create instance of ProductController
const productController = new ProductController();
server.get('/', productController.getProduct)
server.get('/new', productController.getAddForm)
server.get('/', productController.addNewProduct)

server.use(express.static('src/views'))

server.listen(8080)