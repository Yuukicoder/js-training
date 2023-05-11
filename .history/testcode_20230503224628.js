const numbers = [1, 3, 3, 5];

Array.prototype.mySome = function (cb) {
    for (const i in this) {
        var output = false;
        if (this.hasOwnProperty(i)) {
            // var value = cb(this[i], i, this)
            if (cb(i)) {
                output = true;
            }
        }
    }
    return output;
}

// console.log(numbers.mySome(function (number) {
//     return number % 2 === 0;
// }));
// Output: false

var result = numbers.mySome((x, y, z) => y % 2 == 0)
console.log(result);
// Output: true
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