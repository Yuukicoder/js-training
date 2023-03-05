// write a js function to extract unique characters from a string
var pushUniqueChar = (str) =>{
    var arr = str.split("");
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if((element >= 0 && element <= 9) || (element >= 'a' && element <= 'z') || (element >= 'A' && element <= 'Z')){
            newArr.push(element);
        }       
    }
    return arr-newArr;
}
console.log(pushUniqueChar("Hello----"));