// write a js function to show the 30 from 1 5 7
var convertCoins = (Money,arr) => {
    var newArr = [];
    arr.sort((a,b) => b-a)
    for (let i = 0; i < arr.length; i++) {
        const element = Math.floor(Money/arr[i]);
        for (let j = 0; j < element; j++) {
            newArr.push(arr[i]);
        }
        Money -= arr[i]*element;
        
    }
    return newArr;
    
}
console.log(convertCoins(30,[1,5,7]));