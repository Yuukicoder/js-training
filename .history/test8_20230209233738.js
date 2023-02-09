// write a js program to extract the first half of a string of even length
var halfstr = (str) => str.length%2==0? str.slice(0,str.length/2): str.slice(0,length/2-1);
console.log(halfstr("hel"));