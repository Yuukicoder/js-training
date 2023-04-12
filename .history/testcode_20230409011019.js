// console.log(Array.prototype.includes);
// Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
// Use Array.prototype.every() to test if all elements in the collection return true based on fn. Omit the second argument, fn, to use Boolean as a default.
var arr = [1, 2, 3, 4, 5];
// var all = (arr, fn = Boolean) => arr.every(fn);
var allmap = (arr) => arr.map(x => x += 1)
console.log((all(arr, x => x >= 1)));