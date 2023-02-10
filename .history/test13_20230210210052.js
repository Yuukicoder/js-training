// write a js program to find the number of even values up to a given number
var evenValue = (arr) => arr.filter(x => x%2 === 0).length

var findNumber = (n) => {

    const arr = []
   for (let i = 1; i <= n; i++) {
       return arr.push(i)   
   }return arr;

}
console.log(findNumber(9));
console.log(evenValue(findNumber(9)));