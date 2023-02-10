// write a js program to check a given string
//  contains 2 to 4 occurrences of a specified character
var countChar = (str,char) =>  
   str.split('')
   .filter(ch => ch === char).length;

console.log(countChar("Hello","l"));