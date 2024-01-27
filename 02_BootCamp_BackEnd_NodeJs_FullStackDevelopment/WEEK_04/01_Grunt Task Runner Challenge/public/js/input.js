console.log("hello developer");


let array = [9, 6, 4, 3, 2 , 6]
let minValue = 0
let maxValue = 0

for (let index = 0; index < array.length; index++) {
    if (array[index] < minValue){
        minValue = array[index];
    }
    else if(array[index] > maxValue){
        maxValue = array[index]
    }

};

console.log(minValue);
console.log(maxValue);