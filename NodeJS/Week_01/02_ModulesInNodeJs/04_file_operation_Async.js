const fs = require('fs')


// reading data
fs.readFile('employee.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
})


// write data
fs.writeFile('data.txt', "new employee", (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('File write successfuly!');
    }
})


// append data to existing file
fs.appendFile("data.txt", "latest updated", (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("data append successfully.");
    }
})


//delete file
fs.unlink('data.txt', (err) =>{
    if (err) {
        console.log(err);
    } else {
        console.log('File deleted !');
    }
})

console.log("this is another operation");