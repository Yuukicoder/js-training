// write a js function to convert the array that contains 2 small arrays to the object has keys and values
var arrToObj = (arr) => arr.reduce((acc, arr) => {
    acc[arr[0]] = arr[1];
    return acc;
}, {})
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }