// write a js function to show the 30 from 1 5 7
var convertCoins = (Money,coins) => {
    var newArr = [];
    coins.sort((a,b) => b-a)
    for (let i = 0; i < coins.length; i++) {
        const numCoin = Math.floor(Money/coins[i]);
        for (let j = 0; j < numCoin; j++) {
            newArr.push(coins[i]);
        }
        Money -= coins[i]*numCoin;
        
    }
    return newArr;
    
}
console.log(convertCoins(30,[1,5,7]));