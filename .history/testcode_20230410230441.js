var arr = [1, 2, 3]
var newArr = arr.forEach(x => x % 2 == 0 ? x : x - 1)
console.log(newArr);