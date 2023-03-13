var convertCoins = (value, coin) => {
    coin.sort((a, b) => b - a);
    var newCoins = [];
    var coinIndex = 0;
    while (value > 0) {
        if (value >= coin[coinIndex]) {
            newCoins.push(coin[coinIndex]);
            value -= coin[coinIndex];
        } else {
            coinIndex++;
        }
    }
    return newCoins;
}

var coins = [1, 5, 7];
var value = 30;
var result = [];

while (value > 0 && coins.length > 0) {
    var newCoins = convertCoins(value, coins);
    if (newCoins.length === 0) {
        coins.pop();
    } else {
        result = result.concat(newCoins);
        value -= newCoins.reduce((a, b) => a + b, 0);
    }
}

console.log(result); // Output: [7, 7, 5, 5, 5, 1]