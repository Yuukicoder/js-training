// Use the spread operator (...)    
// and Array.prototype.reverse() 
// to reverse the order of the characters in the string. 
// Combine characters to get a string using String.prototype.join('').
// reverseString('foobar'); // 'raboof'
var reverseString = (str) => Array.prototype.reverse(str.split(''));
console.log(reverseString('hello'));