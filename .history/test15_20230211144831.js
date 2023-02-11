// write a js program to get the largest even number from an array of intergers
var getLargestEvenNumber = (arr) => {

}
var browseArr = (arr) => {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // if(element %  2 == 0) {
            newArr.push(element)
        // }
        return newArr;
    }
}
console.log(browseArr([1,2,3,4,5,6]))