// write a js map function by prototype
arr = [1, 2, 3, 4, 5]
// var result = arr.map(x => x + 1)
// console.log(result);
// ----------------------------------------------------
Array.prototype.map2 = function (cb) {
    var output = []
    this.forEach(a => output.push(cb(a)))
    return output
}
var result = arr.map2(x => x + 1)
console.log(result);