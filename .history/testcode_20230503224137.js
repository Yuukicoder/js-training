const numbers = [1, 3, 3, 5];

Array.prototype.mySome = function (cb) {
    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            const element = this[i];

        }
    }
}

/**
Expected results:

const numbers = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: true
 */