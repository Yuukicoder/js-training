var courses = [1, 2, 3]

Array.prototype.map2 = function (cb) {
    var output = [],
        arrLength = this.length;
    for (let i = 0; i < arrLength; i++) {
        output.push(cb(this[i]));
    }
    console.log(output);
    // return output;
}
courses.map2((course) => `<h2>${course}</h2>`);
// var str = courses.map2(x => `<h2> ${x} </h2>`)
// console.log(str.join("\n"));