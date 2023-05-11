arr = [1, 2, 3, 5]
Array.prototype.some2 = function (cb) {
    var output = false;
    // this.forEach(x => {
    //     if (cb(this[x]))
    //         output = true;
    // })
    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            var value = cb(this[i], i, this)
            if (value)
                output = true;

        }
    }
    return output;
}
var result = arr.some2(x => x == 3)
console.log(result); //true
var result = arr.some2((x, y) => y == 3)
console.log(result); //true
var result = arr.some2((x, y, z) => z.length == 3)
console.log(result); //true