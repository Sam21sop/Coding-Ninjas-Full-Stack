// No need to change prewritten code

// -----------pre-written code starts--------------------

import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'
import { reviewSchema } from './review.schema.js';
import { ObjectId } from 'mongodb';

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);

// creating model for review.
const reviewModel = mongoose.model('Review', reviewSchema);

export default class BookRepository {
    async createBook(bookData) {
        // console.log(bookData);
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }


    async getOne(id) {
        const book = await booksModel.findById(id);
        return book;
    }

    async listBooksByGenre(genre) {
        const books = await booksModel.find({ genre });
        return books;
    }

    async updateBookAvailability(bookId, quantity) {

        console.log(bookId);
        const book = await booksModel.findById(bookId);

        // Calculate the new availableCopies value
        const newAvailableCopies = book.availableCopies + quantity;

        // Update the availableCopies field and save the book
        book.availableCopies = newAvailableCopies;

        await book.save();
        return book;
    }

    async deleteBookById(bookId) {
        const deletedBook = await booksModel.findByIdAndRemove(bookId);
        return deletedBook;
    }

    //------------------pre-written code ends--------------------------

    // Complete the function below

    // adding review to a particular book
    async addReviewToBook(bookId, text, rating) {
        // 1. find book by id
        const book = await booksModel.findById(bookId);
        if(!book){
            throw new Error("bookId doesn't exist!");
        }
        book.reviews = text;

        // 2. find existing rating
        const bookRating = await reviewModel.findOne({rating: new ObjectId(bookId)})
        if(rating){
            bookRating.rating = rating;
            await bookRating.save();
        }
        else{
            const newRating = new reviewModel({
                bookId: new ObjectId(bookId),
                rating: rating
            });
            newRating.save();
        }
    };
    
    async addReviewToBook(bookId, text, rating) {
        const reviewData = { text, rating, book: new mongoose.Types.ObjectId(bookId) }         
        const review = new reviewModel(reviewData); 
        const savedReview = await review.save(); 
        const book = await booksModel.findById(bookId); 
        book.reviews.push(savedReview._id); 
        await book.save(); 
        return savedReview;
    }

}