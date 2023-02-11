// write a js program to check whether a given array of integers
//  is sorted in ascending order
var checkArrSort = (arr) =>  {
    for (let i = 0; i < arr.length; i++) {
            if(arr[i]<arr[i+1]) return true;
        
            else return false
    }
}
console.log(checkArrSort(["Nga","Tra","Trang","An"]));