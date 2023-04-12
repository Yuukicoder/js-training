// write a js some function by prototype
arr = [1, 2, 3, 4, 5]
// var result = arr.some(x => x % 2 == 0)
// console.log(result);
// ----------------------------------------------------
Array.prototype.some2 = function (cb) {
    var output = [];
    this.forEach(a => {
        if (cb(a))
            output = true
    })
    output.length == 0 ? output = false : output = true;
    return output;
}
var result = arr.some2(x => x % 2 == 0)
console.log(result);