// if the first numeric argument is divisible by the second one.
// Use the modulo operator( % ) to check
// if the remainder is equal to 0.
// isDivisible(6, 3); // true
var isDivisible = (a, b) => a % b == 0;
console.log(isDivisible(6, 3));