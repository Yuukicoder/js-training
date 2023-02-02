// Write a js program to get the extension of a filename
// ý tưởng là cắt index.html thành .html sử dụng slice
var getFileExtension = (str) => str.slice(str.lastIndexOf("."));
console.log(getFileExtension("index.html"));