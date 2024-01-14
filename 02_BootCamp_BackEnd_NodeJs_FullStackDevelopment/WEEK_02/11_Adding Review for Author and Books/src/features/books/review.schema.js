// make necessary imports here

import mongoose from "mongoose";

// write your code here
export const reviewSchema = new mongoose.Schema({
    targetID:{
        type:mongoose.Schema.Types.ObjectId,
        refPath: "target",
    },
    target:{
        type:String,
        enum:["Author", "Book"]
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    text:{
        type: String,
        requred:true
    }
})
