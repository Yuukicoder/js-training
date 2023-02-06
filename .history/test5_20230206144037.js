// Write a js program to get the current Date. 
// expected output: mm-dd-yyy, mm/dd/yyy, dd/mm/yyy
var getfullDay= (date =new Date()) => {
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    console.log(
        `${day}/${month}/${year}`
    ); 
};
getfullDay();