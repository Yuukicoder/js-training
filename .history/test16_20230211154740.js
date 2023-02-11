// write a js program to replace the first digit in a string 
// (should contain at least one digit) with a $ character
var replaceFirst = (str) => 
    {
        var arr=[];
        arr=str.split("")
        arr.splice(0,1,"$")
    return arr.join("")
    }
    
console.log(replaceFirst("hello"));
