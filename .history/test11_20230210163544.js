// write a js program to check a given string
//  contains 2 to 4 occurrences of a specified character
var countchar = (str,char) =>  
   str.split('')
   .filter(ch === char).length;

console.log(countChar("Hello","a"));