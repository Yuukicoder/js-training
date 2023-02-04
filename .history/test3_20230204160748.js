// create a function getMostFavoriteSport 
// that has one paramater, getMostFavoriteSport return sport 
// that has like score greater than 5
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

var getMostFavoriteSport = (x) => {
    x.filter(function (sport){
       return sport.like>5
    }
}


// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]





