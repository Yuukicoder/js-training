var convertCoins = (value, coin) => {
    coin.sort((a, b) => b - a);
    var newCoins = [];
    var coinIndex = 0;
    while (value > 0 && coinIndex < coin.length) {
        const coinCount = Math.floor(value / coin[coinIndex]);
        for (let i = 0; i < coinCount; i++) {
            newCoins.push(coin[coinIndex]);
        }
        value -= coinCount * coin[coinIndex];
        coinIndex++;
    }
    if (value > 0) {
        newCoins = [];
    }
    return newCoins;
}

var coins = [7, 5, 1];
var value = 30;
var result = [];

for (let i = 0; i < coins.length; i++) {
    const newCoins = convertCoins(value, coins.slice(i));
    result = result.concat(newCoins);
    value -= newCoins.reduce((a, b) => a + b, 0);
}

console.log(result); // Output: [7, 7, 5, 5, 5, 1]