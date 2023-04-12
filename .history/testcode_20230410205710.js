var courses = [1, 2, 3]

Array.prototype.map2 = function (cb) {
    var arrLength = this.length;
    for (let i = 0; i < arrLength; i++) {
        cb();
    }
}
courses.map2(function (course, index) {

});
// var str = courses.map2(x => `<h2> ${x} </h2>`)
// console.log(str.join("\n"));