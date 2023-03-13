// write a js function to show the 30 from 1 5 7
var convertCoins = (coin,arr) => {
    var newArr = [];
    arr.sort((a,b) => b-a)
    for (let i = 0; i < arr.length; i++) {
        const element = Math.floor(coin/arr[i]);
        for (let j = 0; j < element; j++) {
            newArr.push(arr[i]);
        }
        coin -= arr[i]*element;
        
    }
    return newArr;
    
}
console.log(convertCoins(26,[1,5,7]));