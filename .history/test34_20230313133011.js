// write a js function that to convert amount to coins
var convertCoins = (value, coin) => {
    var newCoins = [];
    while (value > 0) {
        for (let i = 0; i < coin.length; i++) {
            const numCoin = Math.floor(value / coin[i]);
            for (let j = 0; j < numCoin; j++) {
                newCoins.push(coin[i]);
            }
            value -= coin[i] * numCoin;

        }
    }
    return newCoins;
}
console.log(convertCoins(25, [10, 5, 2, 1]));