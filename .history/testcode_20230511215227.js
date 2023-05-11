// Returns true if the provided predicate function 
// returns true for all elements in a collection,
//  false otherwise.
// Use Array.prototype.every() to test if all elements in the collection 
// return true based on fn. Omit the second argument, fn, to use Boolean as a default.
// all([4, 2, 3], x => x > 1); // true
// all([1, 2, 3]); // true
var all = (arr, ft = Boolean) => arr.every(ft);
console.log(all[4, 2, 4], x => x > 1);