// Write a js program to create a new string from a given string 
// taking the last 3 characters and added at both the front and back. 
// The string length must be 3 or more, if not, the original string is return
//7
var createNewStr = (str) => str.length >= 3 ? str.slice(-3) + str + str.slice(-3) : str;
console.log(createNewStr(`hello`));