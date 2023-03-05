// write a js function to extract unique characters from a string
var pushUniqueChar = (str) =>{
    str.split("").filter((item,index,arr) => arr.slice(index+1).indexOf(item) === -1);
}
console.log(pushUniqueChar("aaaaaaaaaaaaabbbbbbbbcccccccc"));