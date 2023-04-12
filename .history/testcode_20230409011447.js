// console.log(Array.prototype.includes);
var reduce2 = (arr) => arr.reduce(myFunc);
var myFunc = (total, num) => {
    return total + num;
}
var newArr = [1, 2, 3, 4, 5];
console.log(reduce2(newArr));