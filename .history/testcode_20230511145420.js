// if the first numeric argument is divisible by the second one.
// Use the modulo operator( % ) to check
// if the remainder is equal to 0.
// isDivisible(6, 3); // true
var isDivisible = (a, b) => b % a == 0 ? true : false;