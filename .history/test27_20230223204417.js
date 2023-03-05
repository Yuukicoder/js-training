    var fs = require('fs');
    var readFileLines = fileName => 
    fs 
        .readFileSync(fileName)
        .toString('UTF8')
        .split('\n');

console.log(readFileLines('search.txt'));