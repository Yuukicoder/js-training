// write a js program to concatenate two strings except their first character
var constr = (str1,str2) => 
// ================ first method < basic > =============================================

        str1.slice(1) + str2.slice(1);
        
// =================== second method < concat > ===========================================

        // str1.slice(1).concat(str2.slice(1));

console.log(constr("hello","hi"));