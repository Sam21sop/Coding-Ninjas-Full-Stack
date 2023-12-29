// Please don't change the pre-written code
// Import the necessary modules here
import { addUser, confirmLogin } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  // Write your code here
  const {name, email, password} = req.body;
  const user = addUser({name, email, password});
  
  if (!user) {
    return res.status(400).send({ "status": "failure", "msg": "invalid user details" })
  } else {
    return res.status(201).send({ "status": "success", "user": user })
  }

};

export const loginUser = (req, res) => {
  // Write your code here
  const {email, password} = req.body;
  const isValidUser = confirmLogin({email, password})
  if (!isValidUser) {
    return res.status(400).send({ "status": "failure", "msg": "invalid user details" })
  } else {
    return res.status(200).send({ "status": "success", "msg": "login successful" })
  }
};
