// Write a js program to get the extension of a filename
var getFileExtension = (str) => str.slice( str.lastIndexOf(".") );
// using lastIndexOf to deal with the name of many dots, like webpack.config.js
console.log(getFileExtension("index.html"));
console.log(getFileExtension("webpack.config.js"));