// Write a js program to get the extension of a filename
//2










// write a js program to replace the first digit in a string 
// (should contain at least one digit) with a $ character
//16
// var replaceDigit = (x) => x.replace(x[0], "$")
var replaceDigit = (x) => {
    var arr = x.split('');
    arr.splice(0, 1, `$`);
    arr.join("");
    return arr;
}

console.log(replaceDigit('abc'));