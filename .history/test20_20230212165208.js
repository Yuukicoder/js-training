// write a js program to generate a random hexadecimal color code
var getHexNum = () => Math.floor(Math.random()*16).toString(16);
console.log(getHexNum());
//why math random *16?? because hexadecimal in 1-9 and a-f => 15 nums, so we pick 16 with floor