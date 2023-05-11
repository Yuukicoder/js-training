// 10,24,31
// 31
// write a js gcd function 
var Gcd = (...arr) => {
    var _gcd = (x, y) => !y ? x : x % y;
    return [...arr].reduce((a, b) => _gcd(a, b))
}
console.log(Gcd([1, 2]));