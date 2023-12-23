import fs from 'fs'

// function to write a blog to a file
export const writeBlog = (filePath, blogContent) => {
    try {
        // syncronously write the blog content
        fs.writeFileSync(filePath, blogContent);
    } catch (error) {
        console.log(`Error writing the blog to ${filePath}: ${error.message}`)
    }
};



// Function to publish content of file
export const publishBlog = (filePath) => {
    try {
        // Syncronously read the content of the specify path
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        return null;
    }
}

