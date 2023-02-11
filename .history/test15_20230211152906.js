// write a js program to get the largest even number from an array of integers

// ====================================== first method < basic > =======================================
var getLargestEvenNumber = (arr) => {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] %  2 == 0) {
            newArr.push(arr[i])
        }
    }
    newArr.sort;
    return newArr[newArr.length-1]
}

// ========================================= second method < using math.max > ==============================
var getLargestEvenNumber = (arr) => 
Math.max(...arr.filter(x => x%2 == 0))
console.log(getLargestEvenNumber([1,2,3,4,5,6,7,11,123]))