var arr = [1, 2, 3]
// var newArr = arr.forEach(x => console.log(x))
Array.prototype.forEach2 = function (cb) {
    var arrLength = this.length;
    for (let i = 0; i < arrLength; i++) {
        cb(this[i], i)
    }
}
arr.forEach2((a, b) => console.log(b, a))