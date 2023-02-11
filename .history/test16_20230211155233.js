// write a js program to replace the first digit in a string 
// (should contain at least one digit) with a $ character
var replaceFirst = (str) => 
    {
        var arr=[];
        arr=str.split("")
        arr.filter(x => 0<=x && x<=9 ? $:x)
        return arr.join("")
    }
    
console.log(replaceFirst("su1sanoo"));
