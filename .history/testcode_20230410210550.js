var courses = [1, 2, 3]

Array.prototype.map2 = function (cb) {
    var arrLength = this.length;
    for (let i = 0; i < arrLength; i++) {
        cb(this[i]);
    }
}
courses.map2((course) => console.log(`<h2>${course}</h2>`));
var str = course.map(x => console.log(`<h3>${course}</h3>`))
// var str = courses.map2(x => `<h2> ${x} </h2>`)
// console.log(str.join("\n"));