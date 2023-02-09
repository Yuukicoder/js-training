// write a js program to concatenate two strings except their first character
var constr = (str1,str2) => 
        str1.slice(1)+str2.slice(1);
    // (str1.slice(1)).concat((str2.slide(1)));

console.log(constr("a","b"));