arr = [1, 2, 3, 5]
Array.prototype.some2 = function (cb) {
    var output = false;
    this.forEach(x => {
        if (cb(this[x]))
            output = true;
    })
    return output;
}
var result = arr.some2(x => x == 4)
console.log(result); //true