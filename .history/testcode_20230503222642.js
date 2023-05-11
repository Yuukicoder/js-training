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
var result = courses.some(x => x.isFinish == true);
console.log(result);