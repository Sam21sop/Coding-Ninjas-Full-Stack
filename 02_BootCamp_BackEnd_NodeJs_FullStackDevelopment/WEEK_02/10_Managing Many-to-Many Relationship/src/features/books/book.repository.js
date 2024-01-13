// Make necessary imports here.
// Don't change the pre-written code.

import mongoose, { Error } from 'mongoose';
import { bookSchema } from './book.schema.js'
import { reviewSchema } from './review.schema.js';
import { authorSchema } from './author.schema.js';

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);

// creating model for review.
const reviewModel = mongoose.model('Review', reviewSchema);

// creating model for author
const authorModel = mongoose.model('Author', authorSchema);


export default class BookRepository {
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    async addReviewToBook(bookId, text, rating) {
        const reviewData = {
            text,
            rating,
            book: new mongoose.Types.ObjectId(bookId)
        }
        const review = new reviewModel(reviewData);
        const savedReview = await review.save();

        const book = await booksModel.findById(bookId);

        book.reviews.push(savedReview._id);

        await book.save();

        return savedReview;

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

    // Complete the following four funtions.
    async createAuthor(authorData) { 
        // 1. Find author by its id 
        const author = new authorModel.findById(authorData);
        // save found author
        const savedAuthor = await author.save();
        // return saved user
        return savedAuthor;
    }

    async addAuthorToBook(bookId, authorId) { 
        // 1. find book by its id 
        const book = await booksModel.findById(bookId)
        // 2. find the author by its id 
        const author = await authorModel.findById(authorId);

        // book not found throw error
        if(!book || !author){
            throw new Error('Book or Author not Found')
        }
       
        // push the book id in the authors array
        author.books.push(book._id);
        // push the auther id into books array
        book.authors.push(author._id)

        // save book 
        await book.save();
        // save author 
        await author.save();


        return {book, author};
    }

    async listAuthorsByBook(bookId) { 
        //find book and populate in the auther
        const book = await booksModel.findById(bookId).populate('authors');
        // if book not found throw error 
        if(!book){
            throw new Error('Book not found');
        };
        return book.authors;
    }

    async listBooksByAuthor(authorId) { 
        // find author and populate with books
        const author = await authorModel.findById(authorId).populate('books');
        // if author not found throw an error
        if(!author){
            throw new Error('Author not found')
        };
        return author.books;
    }
}