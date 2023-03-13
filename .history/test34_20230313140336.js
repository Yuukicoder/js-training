// write a js function that to convert amount to coins
var convertCoins = (value, coin) => {
    var newCoins = [];
    coin.sort((a, b) => a - b); //7 5 1
    while (value > 0) {
        for (let i = 0; i < coin.length; i++) { // 1
            const numCoin = Math.floor(value / coin[i]); //4
            for (let j = 0; j < numCoin; j++) {
                newCoins.push(coin[i]); //[7 7 7 1 1 1 1]
            }
            value -= coin[i] * numCoin; // 4 - 1*4 =0

        }
    }
    return newCoins;
}
console.log(convertCoins(25, [10, 5, 2, 1]));
console.log(convertCoins(25, [1, 5, 7]));