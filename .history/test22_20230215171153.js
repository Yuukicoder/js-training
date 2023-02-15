// write a js function that returns a passed string with letters in alphabetical order.
var sortStr = (str) =>
{
    var arr = str.split("");
    arr.sort((a,b) => a > b ? 1: -1);
    arr.join("");
    return arr;
} 

    
console.log(sortStr("hello"));