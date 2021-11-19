const fs = require("fs");

var buf = Buffer.alloc(20480);
var pos = 0;
var remainSize = 0;
var srcFileName = "";
var destFileName = "";

console.log("Starting Process....")
fs.readdir("./metal/",(err, files) => {
    if(err) throw err;
    
    console.log("Reading Directories")

    scrFileName = "./source" + file;
    destFileName = "./target" + file;

    console.log("source and target file selected.")

    files.forEach(file); {
        if(file === "metal.avi") {
            console.log("target found!");

            fs.stat(srcFileName, (err, stats) => {
                
                remainSize = stats.size;
            }); 

            var rfd = fs.openSync(srcFileName, 'r');
            var wfd = fs.openSync(destFileName, 'a');
        
            var readBytes = 0;
            while(true) {
                readBytes = fs.readSync(rfd, buf, 0, buf.length, pos);
                if(readBytes > remainSize) {
                    fs.writeSync(wfd, buf, 0, buf.length, pos);
                    pos += readBytes;
                    remainSize -= readBytes;
 
                } else {
                    fs.writeSync(wfd, buf, 0, readBytes)
                    fs.closeSync(rfd);
                    fs.closeSync(wfd);
                    break;
                }

            }
            
        };
        return false
    };
});


