// Write a js program to get the extension of a filename
var getFileExtension = (str) => str.slice( str.lastIndexOf(".") );
console.log(getFileExtension("index.html"));