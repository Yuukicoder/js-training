// filter
arr = [1, 2, 3, 4]
// result = arr.filter(x => x % 2 == 0)
// console.log(result);
Array.prototype.filter2 = (cb) => {
    var output = [];
    var arrLength = this.length;
    // this.forEach(i => {
    //     if (cb(i))
    //         output.push(i);
    // });
    for (let i = 0; i < arrLength; i++) {
        if (cb(i))
            output.push(i);

    }
    console.log(output);
    return output;

}
var result = arr.filter2(x => x % 2 == 0)
console.log(result);