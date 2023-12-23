

export default class ProductModel{
    constructor(_id, _name, _desc, _price, _imgUrl){
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imgUrl = _imgUrl;
    }

    static get(){
        return product;
    }
};

var product = [
    new ProductModel(1, 'Product 1', 'Description for product 1', 19.99, "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"),
    new ProductModel(2, 'Product 2', 'Description for product 2', 340, "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"),
    new ProductModel(3, 'Product 3', 'Description for product 3', 280, "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg")
]
