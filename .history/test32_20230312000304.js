var arrToObj = (arr) => arrToObj.reduce((acc, arr) => acc[arr[0]] == arr[1])
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }