// given two value, write a js program to find out which one is nearest to 100
var near100 = (a,b) =>    
                        (a>=100 && b>=100) ? 
                             ( a-100>=b-100? b:a):(
                                    (a<100 && b<100) ?
                                        (100-a>=100-b? b:a):(
                                             (a<100 && b>100) ? 
                                             (100-a>=b-100? b:a):(100-b>=a-100? a:b)))

console.log(near100(-10,120));