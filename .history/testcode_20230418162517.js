// 10,24
// write a js function that to convert amount to coins
var bubbleSort = (arr) => {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the two elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var convertCoins = (money, coins) => {
    var arr = [];
    bubbleSort(coins);
    for (let i = 0; i < coins.length; i++) {
        const numCoins = Math.floor(money / coins[i]);
        for (let j = 0; j < numCoins; j++) {
            // const element = array[j];
            arr.push(coins[i]);

        }
        money -= numCoins * coins[i];
    }
    return arr;
}
console.log(convertCoins(30, [1, 5, 7]));