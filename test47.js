// Use the spread operator (...)    
// and Array.prototype.reverse() 
// to reverse the order of the characters in the string. 
// Combine characters to get a string using String.prototype.join('').
// reverseString('foobar'); // 'raboof'
// ==================== first method ( split )====================
var reverseString = (str) => str.split('').reverse().join('');
// ==================== second method (...) ======================
var reverseString = (str) => [...str].reverse().join('');
console.log(reverseString('foobar'));