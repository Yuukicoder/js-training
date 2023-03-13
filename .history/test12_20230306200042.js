// write a js program to find the number of even digits in a array of integers
var findEvenNumber = (arr) => arr.filter(x => x%2==0).length
console.log(findEvenNumber([1,2,3,4,1000]));