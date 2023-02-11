//  write a js program to compare two Objects to determine 
// if the first one contains the same properties as the as the second one 
// (which may also have additional properties).
//  For ex, objA and objB are equal (but not to objC)
var objA = {
    a : 1,
    b : 1,
    c : 1,
}
var objB = {
    a : 1,
    b : 1,
    c : 1,
}
var objC = {
    a : 1,
    b : 1,
    d : 1,
}
var checkObj=(a,b) => Object.keys(a)===Object.keys(b)
console.log(checkObj(a,b));