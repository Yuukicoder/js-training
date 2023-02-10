// write a js program to find the number of even values up to a given number
var findNumber = (n) => {

    var arr = []
   for (let i = 1; i <= n.length; i++) {
       return arr.push(i)
       
   }return arr;

}
var evenValue = (n) => n.filter(x => x%2==0).length

console.log(evenValue(findNumber(9)));