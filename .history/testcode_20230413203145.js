// 5,10,15,21,23,24,27,31
// 5
// Write a js program to get the current Date. 
// expected output: mm-dd-yyy, mm/dd/yyy, dd/mm/yyy
var getCurrentDate = (x = new Date()) => {
    var day = x.getDate();
    var month = x.getMonth() + 1;
    var year = x.getYear();
    return `${day}/${month}/${year}`;
}
console.log(getCurrentDate());