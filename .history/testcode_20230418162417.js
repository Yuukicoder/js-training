// 10,24
// write a js function that to convert amount to coins
var convertCoins = (money, coins) => {
    var arr = [];
    for (let i = 0; i < coins.length; i++) {
        const numCoins = Math.floor(money / coins[i]);
        for (let j = 0; j < numCoins; j++) {
            // const element = array[j];
            arr.push(coins[i]);

        }
        money -= numCoins * coins[i];
    }
    return arr;
}
console.log(convertCoins(30, [1, 5, 7]));