// Use the spread operator (...)    
// and Array.prototype.reverse() 
// to reverse the order of the characters in the string. 
// Combine characters to get a string using String.prototype.join('').
// reverseString('foobar'); // 'raboof'
var reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString('hello'));