// write a js function that returns true if the provided predicate function 
// returns true for all elements in a collection, false otherwise

var checkFt = (arr,ft) => {
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(!ft(element)){
        return false;
    }
    
    return true;
}
}
console.log(checkFt([1,2,3,4,5], x => x>3));
console.log(checkFt([1,2,3,4,5], x => x>0));

console.log(([1,2,3,4,5].every(x => x>3)));
console.log(([1,2,3,4,5].every(x => x>0)));