var arr = [1, 2, 3, 4, 5]
Array.prototype.every2 = function (cb) {
    var output = [];
    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            if (cb(this[i], i, this))
                output.push(true);
        }
    }
    output.length == this.length ? true : false;
}
result = arr.every2(x => x % 2 == 0)
console.log(result);