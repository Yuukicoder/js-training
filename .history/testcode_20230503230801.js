const numbers = [1, 3, 3, 5];
Array.prototype.myEvery = function (cb) {
    var output = true;
    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            var value = cb(this[i], i, this)
            if (!value) {

                output = false;
                break;
            }

        }
    }
    return output;
}

console.log(numbers.myEvery(function (number) {
    return number % 2 !== 0;
})); // Output: true

console.log(numbers.myEvery(function (number, index) {
    return index % 2 === 0;
})); // Output: false

console.log(numbers.myEvery(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: true
// Expected results

// const numbers = [1, 3, 3, 5];

// console.log(numbers.myEvery(function (number) {
//     return number % 2 !== 0;
// })); // Output: true

// console.log(numbers.myEvery(function (number, index) {
//     return index % 2 === 0;
// })); // Output: false

// console.log(numbers.myEvery(function (number, index, array) {
//     return array.length % 2 === 0;
// })); // Output: true