// Write a js program to get the current Date. 
// expected output: mm-dd-yyy, mm/dd/yyy, dd/mm/yyy
var date = (new Date()) => {
    var day = getDate();
    var month = getMonth();
    var year = getFullYear();
    return `${day}/${month}/${year}`;
};
console.log(date);