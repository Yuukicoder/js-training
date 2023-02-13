// write a js program to convert a comma-separated values (CSV) string to a 2D Array.
//  A new line indicates a new row in the array. 
var convertStrTo2dArr = (str) => str.split("\n").map(row => row.split(",") )
var alphaStr = 
`abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;
console.log(convertStrTo2dArr(alphaStr));
