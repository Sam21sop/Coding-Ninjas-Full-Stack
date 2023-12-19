import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController{
    getProduct(req, res) {
        let product = ProductModel.get();
        console.log(product);
        res.render('index', {products})
    }

    getAddForm(req, res){
        return res.render('new-product')
    }

    addNewProduct(req, res){
        //access data from form
        console.log(req.body)
        let product = ProductModel.get();
        res.render('products', {products: product})
    }
}