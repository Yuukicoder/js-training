// 10,21,23,24,27,31
// returns true for all elements in a collection, false otherwise
var checkEl = (arr, con) => {
    for (let i = 0; i < arr.length; i++) {
        if (!con(arr[i]))
            return false;
    }
    return true;
}
console.log(checkEl([1, 2, 3], x => x > 0)); //true
console.log(checkEl([1, 2, 3], x => x % 2 == 0)); //false