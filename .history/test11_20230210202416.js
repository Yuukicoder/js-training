// write a js program to check a given string
//  contains 2 to 4 occurrences of a specified character
var countChar = (str,char) =>  
   str.split('')
   .filter(ch => ch === char).length;
var is2To4 = (str,char) => {

   return countChar(str,char)>=2 && countChar(str,char)<=4 ? true:false;
} ;
console.log(is2To4("Hello","o"));