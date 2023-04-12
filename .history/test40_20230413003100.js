// write a js find function by prototype
arr = [1, 2, 3, 4, 5]
// var check = arr.find(x => x % 2 == 0)
// console.log(check);
// --------------------------------------------------------
Array.prototype.find2 = function (cb) {
    var output;
    this.sort((a, b) => b - a);
    this.forEach(a => {
        if (cb(a))
            output = a;
    })
    return output;
}
var check = arr.find2(x => x % 2 == 0)
console.log(check);