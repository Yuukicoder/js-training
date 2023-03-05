// write a js function to find not repeated character 
var findNotRepeatChar = (str) => 
str.split("").filter((item,index,arr) => arr.filter(arrItem => arrItem === item).length === 1)

console.log(findNotRepeatChar("hello"));