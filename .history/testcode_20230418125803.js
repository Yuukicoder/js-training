// 10,15,21,23,24,27,31
// 15
// write a js program to get the largest even number from an array of integers
var getLargestEven = (arr) => Math.max(...arr.filter(x => x % 2 == 0))
console.log(getLargestEven([1, 2, 4, 5]));