// Write a js program to get the current Date. 
// expected output: mm-dd-yyy, mm/dd/yyy, dd/mm/yyy
var getFullDay= (x =new Date()) => {
    var day = x.getDate();
    var month = x.getMonth()+1;
    var year = x.getFullYear();
   return `${day}/${month}/${year}`;
};
console.log(
   getfullDay()
);