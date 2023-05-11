// filter
arr = [1, 2, 3, 10]
// result = arr.filter(x => x % 2 == 0)
// console.log(result);
Array.prototype.filter2 = function (cb) {
    var output = [];
    var arrLength = this.length;
    this.forEach(i => {
        if (cb(i))
            output.push(i);
    });
    return output;
    for (let i = 1; i <= arrLength; i++) {
        if (cb(i))
            output.push(i);


    }
    console.log(output);
    return output;

}
var result = arr.filter2(x => x % 2 == 0)
console.log(result);