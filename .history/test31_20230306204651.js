// write a js function to show the 30 from 1 5 7
var convertCoins = (Money, coins) => {
    var newArr = [];
    // coins.sort((a, b) => b - a)
    var i = 0;
    while (i <= coins.length) {
        var numCoin = Math.floor(Money / coins[i]);
        for (let j = 0; j < numCoin; j++) {
            newArr.push(coins[i]);
        }
        Money -= coins[i] * numCoin;
        i++;
    }
    return newArr;

}
console.log(convertCoins(19, [1, 5, 7]));