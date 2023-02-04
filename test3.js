// create a function getMostFavoriteSport 
// that has one parameter, getMostFavoriteSport return sport 
// that has like score greater than 5
// using filter
const sports = [
    {
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
// ======================================= first method < Basic > ======================================
function getMostFavoriteSport(x) {
    return x.filter(function (y) {
        return y.like > 5;
        
    })
    
}
// ====================================== second method < using arrow function > =========================
var getMostFavoriteSport = (x) => x.filter (y => y.like >5);

console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'basketball, like: 6 }, { name: 'football, like: 10 }]





