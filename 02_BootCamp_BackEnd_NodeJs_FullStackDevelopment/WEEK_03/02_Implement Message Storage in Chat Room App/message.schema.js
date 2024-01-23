// make the necessary imports here
import { Schema, model } from "mongoose"

// implement the below schema
const messageSchema = new Schema({
    username:{
        type:String,
        requred:true
    },
    text:{
        type:String
    },
    room:{
        type:Number
    },
    timestamp:{
        type:Date
    }
});





export const chatModel = model("ChatRoom", messageSchema);