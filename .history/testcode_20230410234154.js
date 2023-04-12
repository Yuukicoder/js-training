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
    // var newArr2, arrLength = this.length;
    // for (let i = arrLength; i > 0; i--) {
    //     if (cb(this[i]))
    //         newArr2 = this[i];
    // }
    // return newArr2;
    var newArr2;
    this.reverse.forEach(a => {
        if (cb(a))
            newArr = a;
    })
    return newArr;
}
var newArr = arr.find2(x => x % 2 == 0)
console.log(newArr);