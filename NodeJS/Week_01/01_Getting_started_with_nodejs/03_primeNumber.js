function primeNumber(number) {
    if (number <= 1)
    {
        return false;
    }

    for (let index = 2; index < number; index++) {
        if (number % index == 0) {
            return false
        }
        else{
            return true;
        }
    }
}


console.log(primeNumber(1)) // false
console.log(primeNumber(2))  // true
console.log(primeNumber(3))  // true
console.log(primeNumber(4))  // false
console.log(primeNumber(5))  // true