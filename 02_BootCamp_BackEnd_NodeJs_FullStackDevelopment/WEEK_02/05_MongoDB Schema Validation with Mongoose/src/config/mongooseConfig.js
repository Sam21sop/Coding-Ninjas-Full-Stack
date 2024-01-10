// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";

export const connectUsingMongoose = async () => {
  // write your code here
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017");
    console.log("MongoDB connected using Mongoose");
  } 
  catch (error) {
    console.log(error);
  }
};
