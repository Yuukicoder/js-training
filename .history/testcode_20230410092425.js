// Write a js program to create a new string from a given string 
// taking the last 3 characters and added at both the front and back. 
// The string length must be 3 or more, if not, the original string is return
//7
var createNewStr = (str) => {
    var newStr = str.slice(-3)
    return newStr + str + newStr;
}
console.log(createNewStr(`hello`));