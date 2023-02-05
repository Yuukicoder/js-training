// write a JS program to replace every character
//  in a given string with the character
//   following it in the alphabet
// using String.fromCharCode, charCodeAt

// ==================================== first method < basic > ==================================

function moveCharsForward(x) {
    var Str = x.split('') // split the characters of string to the items of array
    .map(char => String.fromCharCode(char.charCodeAt(0)+1)) 
    //  use map to browse the array, 
    //  the string.fromCharCode to convert the ASCII number to character
    // whereas charCodeAt convert the character to number in order to 
    // calculate the position of the following character
    .join();// to convert array to string 
    return Str;
}

// =================================== second method < using arrow function >================================
var moveCharsForward = (x) =>
    x
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0)+1))
    .join();
;

console.log(moveCharsForward(`abc`));   