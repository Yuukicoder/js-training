// write a js function to present 30 dollars by 1,5,7
var convertCoins = (money, coins) => {
    for (let i = 0; i < coins.length; i++) {
        var newArr = [];
        const numCoins = Math.floor(money / coins[i]);
        for (let j = 0; j < numCoins; j++) {
            newArr.push(coins[j]);
        }
        money -= numCoins * coins[i];
    }
    return newArr;
}
console.log(convertCoins(30, [1, 5, 7]));