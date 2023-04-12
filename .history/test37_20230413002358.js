// write a js foreach function by prototype
arr = [1, 2, 3, 4, 5]
// foreach
// arr.forEach(x => console.log(x))
// --------------------------------------------------------
Array.prototype.forEach2 = function (cb) {
    var output = [];
    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            output.push(cb(this[i]))
        }
    }
    return output
}
arr.forEach2(x => console.log(x))