const fs = require("fs");
var buf = Buffer.alloc(20480);
var pos = 0;


fs.readdir("./metal", (err, files) => {
    console.log("Reading directory.");

    if(files === "metal.avi") {
        files.forEach(file) => {

        };


    }
});

fs.readSync()

