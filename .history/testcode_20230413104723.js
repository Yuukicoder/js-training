// 5,6,10,15,21,23,24,27,31
// 5
// Write a js program to get the current Date. 
// expected output: mm-dd-yyy, mm/dd/yyy, dd/mm/yyy
// 6
// write a js program to create a new string adding "New!" in front of a given string.
//  If the given string begins with "New!" already then return the original string
var getNewString = (x) => x.indexOf(`New!` != 0) ? `New!`.concat(x) : x;
console.log(getNewString('hello'));