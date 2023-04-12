const numbers = [1, 2, 3];
Array.prototype.myMap = function (cb) {
    var output = [],
        arrLength = this.length;
    for (let i = 0; i < arrLength; i++) {
        output.push(cb(this[i], i));
    }
    return output;
}
var newArr = numbers.myMap((a, b) => a * b);
console.log(newArr);
// Expected results

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]