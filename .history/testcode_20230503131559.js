// filter
arr = [1, 2, 3, 10]
// result = arr.filter(x => x % 2 == 0)
// console.log(result);
Array.prototype.filter2 = function (cb) {
    var output = [];

    // this.forEach(i => {
    //     if (cb(i))
    //         output.push(i);
    // });
    // return output;
    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            if (cb(this[i]))
                output.push(this[i]);

        }
    }
    return output;

}
var result = arr.filter2(x => x % 2 == 0)
console.log(result);