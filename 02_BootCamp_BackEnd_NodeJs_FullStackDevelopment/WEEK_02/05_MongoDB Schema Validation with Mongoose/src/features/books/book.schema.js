// Please don't change the pre-written code
// make the necessary imports for creating book schema named 'bookSchema'
import {Schema} from "mongoose";

const genreContainsOnly = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Fantasy', 'Other']

// Start writing your code here
const bookSchema = new Schema({
    title: {type: String, required : true},
    author: {type: Schema.Types.ObjectId, ref:"Author", required : true},
    genre: {type: String, required : true, enum: genreContainsOnly},
    copies: {type: Number, required: true, min: 1},
    availableCopies: {type: Number, required: true, min: 0}
});

export default bookSchema;
