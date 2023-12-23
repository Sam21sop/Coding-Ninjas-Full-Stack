// // Import the necessary modules here
// import path from 'path';
// import ProductModel from '../models/product.model.js';

// export default class ProductController {
//   getProducts = (req, res) => {
//     //  Write your code here
//     let productModel = new ProductModel();
//     // console.log(productModel.fetchProducts());
//     res.json(productModel.fetchProducts())
//     // res.sendFile(path.join(path.resolve(), 'src', 'views', 'index.html'))
//   };
// }


import ProductModel from "../models/product.model.js";
const productModel = new ProductModel();

export default class ProductController {
  getProducts = (req, res) => {
    let products = productModel.fetchProducts();
    res.send(products);
  };
}