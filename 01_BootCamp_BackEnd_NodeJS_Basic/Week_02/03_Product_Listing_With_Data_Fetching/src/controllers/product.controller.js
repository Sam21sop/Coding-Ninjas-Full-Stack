// Please don't change the pre-written code
// Import the necessary modules here
import path from 'path';
import ProductModel from "../models/product.model.js";
const productModel = new ProductModel;

export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here
    let product = productModel.fetchProducts();
    res.render('product', {products : product})
  };
}
