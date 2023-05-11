// 3,5,6,10,15,21,23,24,27,31
// 3
// create a function getMostFavoriteSport 
// that has one parameter, getMostFavoriteSport return sport 
// that has like score greater than 5
// using filter
const sports = [{
        name: 'basketball',
        like: 6
    },
    {
        name: 'swim',
        like: 5
    },
    {
        name: 'football',
        like: 10
    },
]

Array.prototype.filter2 = function (cb) {
    var output = [];
    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            output.push(cb(this[i]))
        }
    }
    return output;
}
var getMostFavoriteSport = (x) => x.filter2(x => x.like > 5)
console.log(getMostFavoriteSport(sports));