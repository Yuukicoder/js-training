// 10
// -----------ab------a-----100------b--------ab------------
// given two value, write a js program to find out which one is nearest to 100
var checkNearest100 = (a, b) =>
    (a <= 100 && b <= 100) ? (a >= b ? a : b) :
    ((a >= 100 && b >= 100) ? (a >= b ? b : a) :
        ((a >= 100 && b <= 100) ? (abs(a - 100) >= abs(b - 100) ? b : a) :
            ((a <= 100 && b >= 100) ? (abs(a - 100) >= abs(b - 100) ? b : a) : (abs(a - 100) <= abs(b - 100) ? a : b))))
console.log(checkNearest100(10, 20));
console.log(checkNearest100(100, 200));
console.log(checkNearest100(10, 200));