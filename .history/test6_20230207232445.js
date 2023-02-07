// write a js program to create a new string adding "New!" in front of a given string.
//  If the given string begins with "New!" already then return the original string
// var newstr = (str) => `New!`.concat(str);
// đối vs trường hợp có new nữa thì phải xem chuỗi đã có new hay chưa
var newstr = (str) =>
{
    str.indexOf(`New!`) === 0 ? str : `New! ${str}` ;
}
console.log(newstr('New!girlfriend'));