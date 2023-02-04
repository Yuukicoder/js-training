// create a function getMostFavoriteSport 
// that has one parameter, getMostFavoriteSport return sport 
// that has like score greater than 5
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

// var getMostFavoriteSport = (x) => {
//    return x.filter(function(sport){
//          return sport.like >5;
//     })
// }

function getMostFavoriteSport(x) {
    return x.filter(function (y) {
        return y.like > 5;
        
    })
    
}
// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'basketball, like: 6 }, { name: 'football, like: 10 }]





