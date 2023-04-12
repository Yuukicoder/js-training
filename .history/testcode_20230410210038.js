var courses = [1, 2, 3]

Array.prototype.map2 = function (cb) {
    var arrLength = this.length;
    for (let i = 0; i < arrLength; i++) {
        cb(this[i], i);
    }
}
courses.map2((course, index) => console.log(index, course););
// var str = courses.map2(x => `<h2> ${x} </h2>`)
// console.log(str.join("\n"));