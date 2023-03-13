// write a js function to present 30 dollars by 1,5,7
var convertCoins = (money, coins) => {
    var newArr = [];
    // money:30
    // coins:  1 5 7
    coins.sort((a, b) => b - a); //7 5 1
    for (let i = 0; i < coins.length; i++) { //duyệt từ đầu đến cuối
        const numCoins = Math.floor(money / coins[i]); //đưa ra cái số lượng của đồng
        for (let j = 0; j < numCoins; j++) {
            newArr.push(coins[i]); //bỏ giá trị đồng vào mảng mới
        }
        money -= numCoins * coins[i]; //30-28=2 
    }
    return newArr; // xuất ra mảng mới [7 7 7 7 1 1]
}


console.log(convertCoins(30, [1, 5, 7]));