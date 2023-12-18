// common js module aproach/type
function sum(a, b) {
    return a + b
}

// 1. 1st way
module.exports = {
    sum : sum
}


// 2. 2nd way
module.exports.sum = (x, y) => {
    return x + y
}


// 3. 3rd way(short hand)
exports.sum = (x, y) => {
    return x + y
}


// 4 4th way
module.exports = function(x, y){
    return x + y
}