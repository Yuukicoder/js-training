// write a js program to replace the first digit in a string 
// (should contain at least one digit) with a $ character
var replaceFirst = (str) => str.replace(/\d/,'$')    
    
console.log(replaceFirst("0susanoo"));
