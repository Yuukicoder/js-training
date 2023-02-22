var convertCoins = (value, coin) => {
    coin.sort((a,b) => b-a);
    var newCoins = [];
    var coinIndex = 0;
    while(value > 0){
        const coinCount = Math.floor(value/coin[coinIndex]);
        for (let i = 0; i < coinCount; i++) {
            newCoins.push(coin[coinIndex]);
            
        }
        value -= coinCount*coin[coinIndex];
        coinIndex++;
    }
    return newCoins;
}