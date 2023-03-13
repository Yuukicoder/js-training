var arrToObj = (arr) => arr.reduce((acc, item) => acc[item[0]] + item[1], {})
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }