// write a js program to get the largest even number from an array of integers

// ====================================== first method < basic > =======================================
var getLargestEvenNumber = (arr) => {
    arr.sort;
    return arr[arr.length-1]
}
var browseArr = (arr) => {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element %  2 == 0) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
========================================= second method < using math.max > ==============================
console.log(getLargestEvenNumber(browseArr([1,2,3,4,5,6,7,11,123])))