// Write a js program to create a new string from a given string 
// taking the last 3 characters and added at both the front and back. 
// The string length must be 3 or more, if not, the original string is return
var newStr = (str) => {
    var arr=str.split(",");
    // var newarr = arr.slice();
    // newarr.join();
    return str;
}
console.log(...newStr("Hello"));