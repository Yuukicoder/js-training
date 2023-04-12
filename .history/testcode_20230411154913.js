arr = [1, 2, 3]
// foreach
// arr.forEach(x => console.log(x))
Array.prototype.forEach2 = function (cb) {
    var output = [],
        arrLength = this.length;
    for (let i = 0; i < arrLength; i++) {
        output.push(cb(this[i]))
    }
    console.log(output);
    // return output
}
arr.forEach2(console.log(x))
// reduce
// find
// filter