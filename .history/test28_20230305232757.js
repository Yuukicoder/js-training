// write a js function to convert string to string 1
var newStr = (str) => str.map(s => s.replace(/[^1]/g,1))
console.log(newStr(["2324356"])); // output: [2324356]
