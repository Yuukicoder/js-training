// write a js function to present 30 dollars by 1,5,7
var convertCoins = (money, coins) => {
    var newArr = [];
    // money:30
    // coins: 1 5 
    coins.sort((a, b) => b - a); //7 5 1
    for (let i = 0; i < coins.length; i++) {
        const numCoins = Math.floor(money / coins[i]);
        for (let j = 0; j < numCoins; j++) {
            newArr.push(coins[i]);
        }
        money -= numCoins * coins[i];
    }
    return newArr;
}
console.log(convertCoins(30, [1, 5, 7]));