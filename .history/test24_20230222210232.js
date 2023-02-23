// write a js function that to convert amount to coins
var convertCoins = (value, coin) => {
    var newCoins = [];
    for (let i = 0; i < coin.length; i++) {
        const numCoin = Math.floor(value/coin[i]);//calc the max number of each coin in the value
        //that leads a problem that merely runs from the first item to the last => cannot optimized the coin in number 
        for (let j = 0; j < numCoin; j++) {
            newCoins.push(coin[i]);//add the number of this coin into the newCoins
        }
        value -= coin[i]*numCoin;//subtract the added coin 
        
    }
    return newCoins;
}
// this method is not optimized for the coin numbers

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
console.log(convertCoins(26,[1,5,7]));


