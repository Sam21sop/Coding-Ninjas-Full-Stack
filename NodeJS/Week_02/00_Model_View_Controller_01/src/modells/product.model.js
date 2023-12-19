

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
    new ProductModel(1, 'Product 1', 'Description for product 1', 19.99, 'https://en.wikipedia.org/wiki/Image#/media/File:TEIDE.JPG'),
    new ProductModel(2, 'Product 2', 'Description for product 2', 340, 'https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png'),
    new ProductModel(3, 'Product 3', 'Description for product 3', 280, 'https://en.wikipedia.org/wiki/Image#/media/File:Pencil_drawing_of_a_girl_in_ecstasy.jpg')
]
