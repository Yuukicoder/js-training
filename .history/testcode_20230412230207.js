arr = [1, 2, 3, 4, 5]
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
// Array.prototype.reduce2 = function (cb) {
//     var output, arrLength = this.length,
//         b = 0;
//     for (let i = 0; i < arrLength; i++) {
//         output = cb(this[i], b)

//     }
//     return output;
// }
// var sum = arr.reduce2((acc, x) => x + acc)
// console.log(`result:`, sum);
// ===============================================================

// find
// var check = arr.find(x => x % 2 == 0)
// console.log(check);
// --------------------------------------------------------
// Array.prototype.find2 = function (cb) {
//     var output;
//     this.sort((a, b) => b - a);
//     this.forEach(a => {
//         if (cb(a))
//             output = a;
//     })
//     return output;
// }
// var check = arr.find2(x => x % 2 == 0)
// console.log(check);
// ===============================================================


// filter
// var check = arr.filter(x => x % 2 == 0)
// console.log(check);
// --------------------------------------------------------
// Array.prototype.filter2 = function (cb) {
//     var output = []
//     this.forEach(a => {
//         if (cb(a))
//             output.push(a)
//     })
//     return output;
// }
// var check = arr.filter2(x => x % 2 == 0)
// console.log(check);
//===========================================================
// map
// var result = arr.map(x => x + 1)
// console.log(result);
// ----------------------------------------------------
// Array.prototype.map2 = function (cb) {
//     var output = []
//     this.forEach(a => output.push(cb(a)))
//     return output
// }
// var result = arr.map2(x => x + 1)
// console.log(result);
//===========================================================
// some
// var result = arr.some(x => x % 2 == 0)
// console.log(result);
// ----------------------------------------------------
// Array.prototype.some2 = function (cb) {
//     var output = [];
//     this.forEach(a => {
//         if (cb(a))
//             output = cb(a)
//     })
//     if (output.length == 0) {
//         output = false
//     }
//     return output;
// }
// var result = arr.some2(x => x % 2 == 0)
// console.log(result);
//===========================================================
// every
arr.every(x => x % 2 == 0)