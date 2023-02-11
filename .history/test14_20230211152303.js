// write a js program to check whether a given array of integers
//  is sorted in ascending order
var checkArrSort = (arr) =>  {
    for (let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]) return false;        
        }
        return true;
}
console.log(checkArrSort([1,3,4,5]));

// why code is wrong?: {
//     if(arr[i] < arr[i+1]) return true;        
// }
// return false; 

// Imagine the array runs with the condition of wrong and the right is occurred, 
// is really hard to run whereas the condition of right that make the arr browse until the wrong is occurred
