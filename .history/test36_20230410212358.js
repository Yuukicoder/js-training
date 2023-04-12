// recreate a js cb ft map2
var arr = [1, 2, 3]
// var str = arr.map(x => `<h1>${x}</h1>`)
// console.log(str.join("\n"));
Array.prototype.map2 = function (cb) {
    var output = [],
        arrLength = this.length;
    for (let i = 0; i < arrLength; i++) {
        var result = cb(this[i], i)
        // console.log("result: ", result);
        output.push(result);
        return output;
    }
}
var str = arr.map2((x, i) => {

    return `${i}<h1>${x}</h1>`
})
console.log(str.join("\n"));