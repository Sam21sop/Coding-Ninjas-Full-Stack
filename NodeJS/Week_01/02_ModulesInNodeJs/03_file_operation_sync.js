// import required module
const fs = require('fs')

// to read file using blocking code
console.log('starting to read');

const buffer = fs.readFileSync("03_data.txt")
console.log(buffer);
console.log(buffer.toString());

console.log();

const buffer1 = fs.readFileSync("03_data.txt", {encoding:"utf8"})
console.log(buffer1);


// create and write a file using blocking code
try {
    fs.writeFileSync('employee.txt', "name:sopan bhere, role:fullstack Developer, salary:50000")
} catch (error) {
    console.log(error);
}


// append data to existing file
fs.appendFileSync('employee.txt', "\nname:sopan, role:group member, salary:30000");


// delete a file 
try {
    fs.unlinkSync("03_data.txt")
} catch (err) {
    console.log("File doesn't exist!");
}


console.log('this is another operation being performed');