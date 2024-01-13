// Import necessary modules here

import mongoose from "mongoose";

export const authorSchema = new mongoose.Schema({
    // Write your code here
    name:{
        type:String,
        required:true,
        trim:true
    },
    // create an array of book to represent the many-many relation
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Book'
        }
    ]
});
