//  write a js program to check two numbers and return true
//  if one of the number is 100 or if the sum of the
//   two numbers is 100
//1






// Write a js program to create a new string from a given string 
// taking the last 3 characters and added at both the front and back. 
// The string length must be 3 or more, if not, the original string is return
//7






// write a js program to get the largest even number from an array of integers
//15
var findLargest = (x) => {
    x.sort((a, b) => b - a)
    return x.find(c => c % 2 == 0)
}
console.log(findLargest([1, 2, 3, 4, 5, 5, 6, 7, 78, 889, 9, 9, 10]));