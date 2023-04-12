// write a js every function by prototype
arr = [1, 2, 3, 4, 5]
// var result = arr.every(x => x % 2 == 0)
// console.log(result);
// ----------------------------------------------------
Array.prototype.every2 = function (cb) {
    var output = [];
    this.forEach(a => {
        if (!cb(a))
            output.push(false)
    })
    output.length == 0 ? output = true : output = false;
    return output;
}
var result = arr.every2(x => x % 2 == 0)
console.log(result);