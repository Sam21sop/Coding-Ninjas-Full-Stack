// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/ProductModel.js";

const productModel = new ProductModel();

export default class productController {
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  search = (req, res) => {
    // Write your code here
    const {name} = req.body;
    // console.log(name)
    // console.log("Search Query:", req.body);
    // const allProducts = productModel.getAllProducts();
    // console.log(allProducts)

    // const searchResult = allProducts.filter( product => 
    //   product.name.includes(name))

    const result = productModel.searchResult(name);


    // console.log(searchResult)


    res.render("searchResults", { products: result });
  };
}
