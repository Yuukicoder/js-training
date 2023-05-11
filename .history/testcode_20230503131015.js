// filter
arr = [1, 2, 3, 4]
// result = arr.filter(x => x % 2 == 0)
// console.log(result);
Array.prototype.filter2 = function (cb) {
    var output = [];
    var arrLength = this.length;
    this.sort((a, b) => b - a)
    // this.forEach(i => {
    //     if (cb(i))
    //         output.push(i);
    // });
    for (let i = 0; i < arrLength; i++) {
        if (cb(i))
            output.push(i);


    }
    return output;

}
var result = arr.filter2(x => x % 2 == 0)
console.log(result);