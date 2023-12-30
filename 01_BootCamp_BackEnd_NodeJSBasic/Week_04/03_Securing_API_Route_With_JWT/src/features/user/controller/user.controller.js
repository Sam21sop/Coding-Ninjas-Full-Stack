// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';

import { addUser, confirmLogin } from "../model/user.model.js";
import { cookie } from 'express-validator';
export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);
  if (status) {
    //  Write your code here to create the JWT token and store it in a cookie named "jwtToken"
    const jwtToken = jwt.sign({userID: status.id, email: status.email}, "8A27D64E3DE59252173BB4A8765A7", {expiresIn:'1h'})

    // set jwt token in the cookie
    res.cookie('jwtToken', jwtToken, {httpOnly:true})

    res.status(200).json({ status: "success", msg: "login successfull", token });

  } 
  else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
