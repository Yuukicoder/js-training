// Write a js program to get the current Date. 
// expected output: mm-dd-yyy, mm/dd/yyy, dd/mm/yyy
var getfullDay= (date =new Date()) => {
    var day = getDate();
    var month = getMonth();
    var year = getFullYear();
    console.log(
        `${day}/${month}/${year}`
    ); 
};
getfullDay();