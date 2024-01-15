// // Please don't change the pre-written code
// // Import the necessary modules here
// import { ObjectId } from "mongodb";
// import { likeSchema } from "./like.schema.js";
// import mongoose from "mongoose";

// //creating like model
// const likeModel = mongoose.model("Like", likeSchema);


// export const likeRepo = async (user_id, job_id, model) => {
//   // Write your code here
//   try {
//     const newLike = new likeModel({
//       user: new ObjectId(user_id),
//       likeable: new ObjectId(job_id),
//       on_model: model
//     });
//     await newLike.save(); 
//   } 
//   catch (error) {
//     console.log("Something went wrong with likeRepo database.");
//     throw new Error(error.message)
//   }
// };



// export const getLikesRepo = async (id, on_model) => {
//   // Write your code here
//   try {
//     const likes = await likeModel.find({
//       likeable: new ObjectId(id),
//       on_model: on_model
//     });
//     return likes;
    
//   } catch (error) {
//     console.log("Something went wrong with getLikeRepo database.");
//     throw new Error(error.message)
//   }
// };


import mongoose from "mongoose";
import { likeSchema } from "./like.schema.js";
const likeModel = mongoose.model("Like", likeSchema);

export const likeRepo = async (user_id, job_id, model) => {
  const newLike = new likeModel({
    user: user_id,
    likeable: job_id,
    on_model: model,
  });
  return await newLike.save();
};
export const getLikesRepo = async (id, on_model) => {
  const filter = { likeable: id, on_model };
  return likeModel
    .findOne(filter)
    .populate("user", "name email age type mobile")
    .populate({ path: "likeable", model: on_model })
    .populate({
      path: "likeable",
      populate: {
        path: "applicants",
        model: "User",
        select: "name email age type mobile",
      },
    });
};
