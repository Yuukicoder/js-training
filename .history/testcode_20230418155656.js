// 10,23,24,27,31
// write a js function to find not repeated character 
var findNotRepeatChar = (str) => str.split("").filter((x1, index, arr) => arr.filter(x => x === x1).length === 1)
console.log(findNotRepeatChar("hello"));