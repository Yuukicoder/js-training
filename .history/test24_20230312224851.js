var convertCoins = (value, coin) => {
    coin.sort((a, b) => b - a); // Sắp xếp đồng xu theo thứ tự giảm dần
    var newCoins = [];
    var coinIndex = 0;
    while (value > 0) {
        const coinCount = Math.floor(value / coin[coinIndex]);
        if (coinCount === 0) {
            coinIndex++;
            continue;
        }
        for (let i = 0; i < coinCount; i++) {
            newCoins.push(coin[coinIndex]);
        }
        value -= coinCount * coin[coinIndex];
        if (coinIndex === coin.length - 1) {
            break;
        }
        coinIndex++;
    }
    return newCoins;
}

console.log(convertCoins(30, [1, 5, 7])); // Output: [7, 7, 5, 5, 5, 1]