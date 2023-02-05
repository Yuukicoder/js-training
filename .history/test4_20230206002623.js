// write a JS program to replace every character
//  in a given string with the character
//   following it in the alphabet
var moveCharsForward = (x) =>
    x
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0)+1))
    .join();
;
console.log(moveCharsForward(`abc`));