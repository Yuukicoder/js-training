arr = [1, 2, 3, 5]
Array.prototype.some2 = function (cb) {
    var output = false;
    this.forEach(x => {
        if (cb(this[x]))
            output = true;
    })
}
var result = arr.some2(x => x % 2 == 0)
console.log(result); //true