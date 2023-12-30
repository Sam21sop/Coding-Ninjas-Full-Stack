// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  // read token from header
  const clientToken = req.cookies.jwtToken;

  // Check whether received token is empty/undefined 
  if (!clientToken) {
    return res.status(401).json({ success: false, msg: "Token Missing" })
  };

  // Validation of token
  try {
    jwt.verify(clientToken, "8A27D64E3DE59252173BB4A8765A7", (err, decoded) => {
      if (err) {
        return res.status(401).json({ success: false, msg: 'Invalid token' });
      }
    });
  } 
  catch (error) {
    return res.status(401).send({ success: false, msg: error })
  }
  
  // call next middleware
  next();
};

export default jwtAuth;
