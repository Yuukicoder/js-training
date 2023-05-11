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
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            if (cb(key))
                output.push(key);

        }
    }
    return output;

}
var result = arr.filter2(x => x % 2 == 0)
console.log(result);