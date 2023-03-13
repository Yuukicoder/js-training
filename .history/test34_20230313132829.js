// write a js function that to convert amount to coins
var convertCoins = (value, coin) => {
    var newCoins = [];
    var coinIndex = 0;
    while (value > 0) {
        const coinCount = Math.floor(value / coin[coinIndex]);
        for (let i = 0; i < coinCount; i++) {
            newCoins.push(coin[coinIndex]);

        }
        value -= coinCount * coin[coinIndex];
        coinIndex++;
    }
    return newCoins;
}
console.log(convertCoins(25, [10, 5, 2, 1]));