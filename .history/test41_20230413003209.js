// write a js filter function by prototype
arr = [1, 2, 3, 4, 5]
// console.log(check);
// --------------------------------------------------------
Array.prototype.filter2 = function (cb) {
    var output = []
    this.forEach(a => {
        if (cb(a))
            output.push(a)
    })
    return output;
}
var check = arr.filter2(x => x % 2 == 0)
console.log(check);