// read file 
const fs = require('fs')
const path = require('path')

// E:\GitHub\Coding-Ninjas-Full-Stack\NodeJS\ModulesInNodeJs\NodeJS\ModulesInNodeJs\employee.txt

const file_path = path.join('E:', 'GitHub', 'Coding-Ninjas-Full-Stack','NodeJS', 'ModulesInNodeJs', 'employee.txt')
console.log(file_path);

const file_path_resolver = path.resolve('E:', 'GitHub', 'Coding-Ninjas-Full-Stack','NodeJS', 'ModulesInNodeJs', 'employee.txt')
console.log(file_path_resolver);

console.log(path.extname(file_path));
console.log(path.extname(file_path_resolver));

fs.readFile(file_path, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});