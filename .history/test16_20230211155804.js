// write a js program to replace the first digit in a string 
// (should contain at least one digit) with a $ character
var replaceFirst = (str) => 
    
        // var arr=[];
        // arr=str.split("")
        str.replace(/\d/,'$')
        // return arr.join("")
    
    
console.log(replaceFirst("0susanoo"));
