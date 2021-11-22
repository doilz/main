const fs = require("fs");

var data = 'Standar Input / Output Streams library header that defines the standard input/output stream objects';

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'utf-8');
writeStream.end();

writeStream.on('finish', () => {
    console.log("Finished write file ! ! !");
});

writeStream.on('error', (err) => {
    console.log(err.stack);
});


console.log("writeStream file write finished.");

