import path from 'path';

export default class Productcontroller{
    getProduct(req, res){
        // console.log(path.resolve());
        // return res.sendFile(path.resolve(), 'src', 'views', 'products.html')
        return res.sendFile(path.join(path.resolve(),"src", "views", 'products.html'))
    }
}