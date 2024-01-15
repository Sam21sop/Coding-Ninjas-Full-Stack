// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";


/* 
Create a schema to record likes, allowing users to express interest in both jobs and user profiles.
Fields:
user (mongoose ObjectId, mandatory): Reference 'User' to identify the user who likes.
likeable (mongoose ObjectId, mandatory): Reference the item being liked.
on_model (string, mandatory): Specify whether the like is for a 'User' or a 'Job'.
*/


export const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "on_model",
  },
  on_model: {
    type: String,
    enum: ["User", "Job"],
  },
});
