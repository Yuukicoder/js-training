// write a js program to create a new string adding "New!" in front of a given string.
//  If the given string begins with "New!" already then return the original string
var newstr = (str) =>
    str.indexOf(`New!`) === 1 ? str : `New!${str}`;
console.log(newstr('girlfriend'));