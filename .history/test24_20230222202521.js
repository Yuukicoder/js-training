// write a js function that to convert amount to coins
var convertCoins = (value, arr) => {
    var newCoins = [];
    for (let i = 0; i < arr.length; i++) {
        const element = value/arr[i];
        for (let j = 0; j < element; j++) {
            newCoins.push(arr[i]);            
        }
        value = arr[i]*element;
        
    }
}
console.log(convertCoins(32,[5,4,2,6,1]));