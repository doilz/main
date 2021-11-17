
var fs = require("fs");

console.log("Get file information");
fs.stat('input.txt', (err, stat) => {
    if(err) return console.error(err);

    console.log(stat);
    console.log("Get file information Success! ! !");

    console.log("isFile ?" + stat.isFile());
    console.log("isDirectory ?" + stat.isDirectory());
} );



