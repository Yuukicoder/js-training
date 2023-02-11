// write a js program to check whether a given array of integers
//  is sorted in ascending order
var checkArrSort = (arr) =>  {
    for (let i = 0; i < arr.length; i++) {
            if(arr[i]>arr[i+1]) return false;
        
        }
        return true
}
console.log(checkArrSort([1,3,4,5]));