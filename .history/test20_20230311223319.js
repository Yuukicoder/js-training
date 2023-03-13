// write a js program to generate a random hexadecimal color code
var getHexNum = () => Math.floor(Math.random() * 16);
var getHexColor = () => `#` + Array.from({
    length: 6
}).map(getHexNum).join("");
console.log(getHexColor());
//why math random *16?? because hexadecimal in 1-9 and a-f => 15 numbers, so we pick 16 with floor
//array.from to create an array of 6 variables and use map(getHexNum) to random the hexadecimal numbers
//join to convert array to string
#123abc