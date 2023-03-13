function convertCoins(value, coins) {
    let result = [];
    let i = coins.length - 1;

    while (value > 0 && i >= 0) {
        if (coins[i] <= value) {
            value -= coins[i];
            result.push(coins[i]);
        } else {
            i--;
        }
    }

    if (value > 0) {
        console.log("Không đủ đồng xu để chuyển đổi giá trị");
        return null;
    }

    return result;
}

const coins = [7, 5, 1];
const value = 30;
const result = convertCoins(value, coins);

console.log(result); // [7, 7, 5, 5, 5, 1]