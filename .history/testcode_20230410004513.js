var sumCb = (a, b) => a + b;
var subCb = (a, b) => a - b;
var multiCb = (a, b) => a * b;
var divCb = (a, b) => a / b;
var caculate = (a, b, cb) => cb(a, b);

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3
console.log(caculate(1, 2, sumCb));
console.log(caculate(1, 2, subCb));
console.log(caculate(1, 2, multiCb));
console.log(caculate(3, 1, divCb));