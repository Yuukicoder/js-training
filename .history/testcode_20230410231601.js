var arr = [1, 2, 3]
// var newArr = arr.forEach(x => console.log(x))
// Array.prototype.forEach2 = function (cb) {
//     var arrLength = this.length;
//     for (let i = 0; i < arrLength; i++) {
//         cb(this[i], i)
//     }
// }
// arr.forEach2((a, b) => console.log(b, a))

// reduce
// var sum = arr.reduce((acc, i) => i + acc, 0)
// console.log(sum);
Array.prototype.reduce2 = function (cb, value) {
    var output = [];
    this.forEach((a, value) => output.push(cb(a, value)))
    return output;
    // var arrLength = this.length;
    // for (let i = 0; i < arrLength; i++) {

    // }
}
var sum = arr.reduce2((acc, i) => i + acc, 0)
console.log(sum);