// write a js program to replace the first digit in a string 
// (should contain at least one digit) with a $ character
// var replaceFirst = (str) => 
//     str.split("")
//     .splice(0,4,"$")
//     .join("")
// console.log(replaceFirst("hello"));
var s = n =>
{

    s.splice(1,2,5,6)
    return s;
} 
console.log(s([1,2,3,4]));