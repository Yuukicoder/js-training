// filter
arr = [1, 2, 3, 4]
// result = arr.filter(x => x % 2 == 0)
// console.log(result);
Array.prototype.filter2 = (cb) => {
    var output = [];
    this.forEach(i => {
        if (cb(i))
            output.push(i);
        return output;
    });
}