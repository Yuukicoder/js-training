// 10,21,23,24,27,31
// returns true for all elements in a collection, false otherwise
var checkEl = (arr, con) => {
    arr.forEach(element => {
        if (!con(element))
            return false;
    });
    return true;
}
console.log(checkEl([1, 2, 3], x => x > 0)); //true
console.log(checkEl([1, 2, 3], x => x % 2 == 0)); //false