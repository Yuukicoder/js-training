// write a js function that returns a passed string with letters in alphabetical order.
var sortStr = (str) => str.split("").sort((a,b) => a> b ? 1 :-1).join("");

    
console.log(sortStr("web master"));