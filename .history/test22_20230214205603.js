// write a js function that returns a passed string with letters in alphabetical order.
var sortStr = (str) => str.split("")
.sort
.join();
console.log(sortStr("hello"));