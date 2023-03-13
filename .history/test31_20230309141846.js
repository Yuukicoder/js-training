// write a js gcd function 
var calGcd = (...arr) => {
    var _gcd = (x, y) => !y ? x : calGcd(y, x % y);
    return [...arr].reduce((a, b) => _gcd(a, b));
}
console.log(calGcd(8, 36));
console.log(calGcd(...[12, 8, 32]));