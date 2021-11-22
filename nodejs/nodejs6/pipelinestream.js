const fs = require("fs");    // '' "" 둘다 됨.

var readerStream = fs.createReadStream("input.txt");
var writerStream = fs.createWriteStream("output.txt");

readerStream.pipe(writerStream);

console.log("Write Pipe stream finished ! ! !");
