var courses = [1, 2, 3]

Array.prototype.map2 = function () {
    console.log(this);
}
courses.map2();
// var str = courses.map2(x => `<h2> ${x} </h2>`)
// console.log(str.join("\n"));