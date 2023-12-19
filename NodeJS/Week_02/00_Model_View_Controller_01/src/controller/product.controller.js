import path from 'path';
import productModel from '../modells/product.model.js';

export default class Productcontroller{
    getProduct(req, res){
        // console.log(path.resolve());
        // return res.sendFile(path.resolve(), 'src', 'views', 'products.html')

        let product = productModel.get();
        // console.log(product);
        
        res.render("products", {products:product})
        // return res.sendFile(path.join(path.resolve(),"src", "views", 'products.html'))
    }
}