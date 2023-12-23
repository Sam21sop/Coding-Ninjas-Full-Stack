// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs')

const Solution = () => {
  // Write your code here
  // creating and writing content to file
  fs.writeFileSync('notes.txt', "The world has enough coders")

  //reading created file with error handling
  console.log(fs.readFileSync('notes.txt', {encoding:"utf8"}));

  // append data to existing file
  fs.appendFileSync('notes.txt', " BE A CODING NINJA!")

  // Read conten of updated file
  console.log(fs.readFileSync('notes.txt', {encoding:"utf8"}));

};
Solution();
module.exports = Solution;
