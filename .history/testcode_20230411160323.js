arr = [1, 2, 3]
// foreach
// arr.forEach(x => console.log(x))
// --------------------------------------------------------
// Array.prototype.forEach2 = function (cb) {
//     var output = [],
//         arrLength = this.length;
//     for (let i = 0; i < arrLength; i++) {
//         output.push(cb(this[i]))
//     }
//     return output
// }
// arr.forEach2(x => console.log(x))
// ===============================================================
// reduce
// var sum = arr.reduce((acc, x) => x + acc, 0)
// console.log(sum);
// --------------------------------------------------------
// Array.prototype.reduce2 = function (cb, value) {
//     var output;
//     this.forEach((a) => {
//         value += a;
//         output = cb(value, a)
//         console.log(output);
//     })
//     // return output;
// }
// var sum = arr.reduce2((acc, x) => x + acc, [])
// console.log(sum);
// ===============================================================

// find
arr.find(x => x % 2 == 0)
// --------------------------------------------------------

// ===============================================================


// filter
// --------------------------------------------------------