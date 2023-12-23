// math.js - a CommonJS module for performing calculations on a set of numbers

function sum(nums) {
    return nums.reduce((total, num) => total + num, 0);
}


function mean(nums) {
    return sum(nums) / nums.length;
}


module.exports.sum = (nums) => {
    return nums.reduce((total, num) => total + num, 0);
}
module.exports.mean = (nums) => {
    return sum(nums) / nums.length;
}

// console.log(`The sum is ${sum(nums)}.`);
// console.log(`The mean is ${mean(nums)}.`);