// Returns the sum of an array, after mapping each element to a value using the provided function.

// Use Array.prototype.map() to map each element to the value returned by fn, 
// Array.prototype.reduce() to add each value to an accumulator, 
// initialized with a value of 0.
// sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 20
// sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 20
var sumBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, value) => acc + value, 0);

// var result = sumBy([{
//     n: 4
// }, {
//     n: 2
// }, {
//     n: 8
// }, {
//     n: 6
// }], o => o.n); // 20
var result = sumBy([{
    n: 4
}, {
    n: 2
}, {
    n: 8
}, {
    n: 6
}], 'n'); // 20
console.log(result);