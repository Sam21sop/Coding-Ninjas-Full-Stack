import readline from 'readline';
import { writeBlog, publishBlog } from "./blogActions.js";

// Function to get user input using readline interface

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userInput.question("Enter your blog: ", (blogContent) => {
    userInput.close();

    const filePath = 'myblog.txt';
    writeBlog(filePath, blogContent);
    const content = publishBlog(filePath)
    if (content !== null) {
        console.log(content);
    }
});