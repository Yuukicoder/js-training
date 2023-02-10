// write a js program to check a given string
//  contains 2 to 4 occurrences of a specified character
var countChar = (str,char) =>  
   str.split('')
   .filter(ch => ch === char).length;
var is2To4 = (str,char) =>  
countChar(str,char)>=2 && countChar(str,char)<=4 ? true : false;

console.log(is2To4("Hello","l"));

//function1: convert string to array, use filter to browse the item and count by .length
//function2: if(2<=length<=4) return true else false