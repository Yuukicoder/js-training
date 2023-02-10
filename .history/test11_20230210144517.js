// write a js program to check a given string
//  contains 2 to 4 occurrences of a specified character
var checkOccurrenceStr = (str) =>     {
    var arr=[], dem=0;
    arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
       dem += arr[i];
        
    }
    return arr;
}
console.log(checkOccurrenceStr("Hello"));