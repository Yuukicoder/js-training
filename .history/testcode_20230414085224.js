// 10,15,21,23,24,27,31
// 10
// given two value, write a js program to find out which one is nearest to 100
// var getNear100 = (a, b) => a <= 100 && b <= 100 ?
//  (b > a ? b : a) :
//   (a >= 100 && b >= 100 ? 
//     (b < a ? b : a) : 
//     (a >= 100 && b <= 100 ? 
//         (Math.abs(b-100) <= Math.abs(a-100) ? b:a)
//     ): (Math.abs(b-100) <= Math.abs(a-100) ? b:a))
var near100 = (a, b) =>
    (a >= 100 && b >= 100) ?
    (a - 100 >= b - 100 ? b : a) : (
        (a < 100 && b < 100) ?
        (100 - a >= 100 - b ? b : a) : (
            (a < 100 && b >= 100) ?
            (100 - a >= b - 100 ? b : a) : (100 - b >= a - 100 ? a : b)))

console.log(near100(1, 120));