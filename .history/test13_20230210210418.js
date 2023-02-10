// write a js program to find the number of even values up to a given number

var findNumber = (n) => {
    
    var arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)   
    }return arr;
    
}

var evenValue = (arr) => arr.filter(x => x%2 === 0).length

console.log(findNumber(9));
console.log(evenValue(findNumber(9)));

// function1: create an array to contain the item from n to 0
// function2: find and count the even number