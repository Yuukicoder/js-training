const numbers = [1, 2, 3, 4];
Array.prototype.myFilter = function (cb) {
    var output = [],
        output2 = [],
        output3 = [];
    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            if (cb(this[i]))
                output.push(this[i]);
            else if (cb(i))
                output2.push(this[i]);
            else if (cb(this))
                output3.push(this[i]);
        }
    }
    return output;
}



console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
}));
/**
Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: [1, 2, 3, 4]
 */