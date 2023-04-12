// write a js reduce function by prototype
// var sum = arr.reduce((acc, x) => x + acc, 0)
// console.log(sum);
// --------------------------------------------------------
Array.prototype.reduce2 = function (cb) {
    var output, arrLength = this.length,
        b = 0;
    for (let i = 0; i < arrLength; i++) {
        output = cb(this[i], b)

    }
    return output;
}
var sum = arr.reduce2((acc, x) => x + acc)
console.log(`result:`, sum);