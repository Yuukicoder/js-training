// write a js filter function by prototype
arr = [1, 2, 3, 4, 5]
// var check = arr.filter(x => x % 2 == 0)
// console.log(check);
// --------------------------------------------------------
Array.prototype.filter2 = function (cb) {
    var output = []
    // ================= forEach method ===========================
    this.forEach(a => {
        if (cb(a))
            output.push(a)
    })
    return output;
    // ================= forIn method ==========================
    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            if (cb(this[i]))
                output.push(this[i])

        }

    }
    return output;
}
var check = arr.filter2(x => x % 2 == 0)
console.log(check);