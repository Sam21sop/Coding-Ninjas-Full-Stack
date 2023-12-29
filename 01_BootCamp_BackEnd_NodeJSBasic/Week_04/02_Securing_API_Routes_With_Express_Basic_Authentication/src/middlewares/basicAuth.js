// Please don't change the pre-written code
// Import the necessary modules here
import { fetchAllProducts } from "../features/product/model/product.model.js";
import { getAllUsers } from "../features/user/model/user.model.js";


const basicAuthMiddleware = (req, res, next) => {
  // get header
  const authHeader = req.headers["authorization"];

  

  // check if header is empty return 401
  if(!authHeader){
    return res.status(401).send({success: "false", message:"no authorization details found"})
  }

  // if header is not empty then extract credentials
  const base64Credintial = authHeader.replace("Basic", '');


  // decode credentials
  const decodedCredentials = Buffer.from(base64Credintial, 'base64').toString('utf-8');

  

  // convert decoded credentials into array object
  const extractedCredentials = decodedCredentials.split(":");


  const user = getAllUsers().find(
    (user) => user.email == extractedCredentials[0] && user.password == extractedCredentials[1]
  );

  if (user) {
    const allProducts = fetchAllProducts()
    res.status(200).send({success:true, products: allProducts})
    // next()
  } else {
    return res.status(401).send({success: "false", message:"no authorization details found"})
  }
  
};

export default basicAuthMiddleware;
