// recreate a js cb ft map2
var arr = [1, 2, 3]
// var str = arr.map(x => `<h1>${x}</h1>`)
// console.log(str.join("\n"));
Array.prototype.map2 = function (cb) {
    var arrLength = this.length;
    for (let i = 0; i < arrLength; i++) {
        cb(this[i], i)
    }
}
var str = arr.map2(x => console.log(`<h1>${x}</h1>`))
// console.log(str.join("\n"));