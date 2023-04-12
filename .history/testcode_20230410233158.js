var arr = [1, 2, 3, 4, 5]
// var newArr = arr.forEach(x => console.log(x))
// Array.prototype.forEach2 = function (cb) {
//     var arrLength = this.length;
//     for (let i = 0; i < arrLength; i++) {
//         cb(this[i], i)
//     }
// }
// arr.forEach2((a, b) => console.log(b, a))
// ===========================================================================
// reduce
// var sum = arr.reduce((acc, i) => i + acc, 0)
// console.log(sum);
// Array.prototype.reduce2 = function (cb, value) {
//     var output = [],
//         s = 0;
//     var arrLength = this.length;
//     for (let i = 0; i < arrLength; i++) {
//         s += this[i];
//         output = cb(s, value);
//     }
//     return output;
// --------------simpler-----------------------
//     this.forEach(a => {
//         s += a;
//         output = cb(s, value);
//     })
//     return output;
// }
// -------------------------------------------
// var sum = arr.reduce2((acc, i) => i + acc, 0)
// console.log(sum);
//=================================================================
// find
// var newArr = arr.find(x => x % 2 == 0)
// console.log(newArr);
Array.prototype.find2 = function (cb) {

    this.forEach((a, b) => console.log(cb(a, b)))
}
arr.find2(x => x % 2 == 0)