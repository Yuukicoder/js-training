var courses = [{
    name: `JS`,
    coin: 680,
    isFinish: true,
}, {
    name: `PHP`,
    coin: 860,
    isFinish: false,
}, {
    name: `JS`,
    coin: 980,
    isFinish: false,
}]
Array.prototype.some2 = function (cb) {
    var output = false;
    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            if (cb(this[i]))
                output = true;
        }
    }
    return output;
}
var result = courses.some2(x => x.isFinish == false);
console.log(result);