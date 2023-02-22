// write a js function that to convert amount to coins
var convertCoins = (value, coin) => {
    var newCoins = [];
    for (let i = 0; i < coin.length; i++) {
        const element = Math.floor(value/coin[i]);
        for (let j = 0; j < element; j++) {
            newCoins.push(coin[i]);            
        }
        value -= coin[i]*element;
        
    }
    return newCoins;
}
console.log(convertCoins(46,[1,5,7]));

// this method is not optimized for the coin numbers
