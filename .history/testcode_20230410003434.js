// Write a js program to get the extension of a filename
//2
var getFileExtension = (x) => x.slice(x.lastIndexOf(`.`))
console.log(getFileExtension("view.html"));