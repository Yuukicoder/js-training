// write a JS program to replace every character
//  in a given string with the character
//   following it in the alphabet

// var moveCharsForward = (x) =>
//     x
//     .split('')
//     .map(char => String.fromCharCode(char.charCodeAt(0)+1))
//     .join();
// ;

function moveCharsForward(x) {
     x.split('');
     x.map(char => String.fromCharCode(char.charCodeAt(0)+1));
     return x.join();
     return x;
}
console.log(moveCharsForward(`abc`));   