const fs = require("fs");
var buf = Buffer.alloc(5);


fs.open("text.txt", "r+", (err, fd) => {
    fs.stat("text.txt", (err, stats) => {
        if(err) throw err;
        
        console.log(typeof fd);

        
            fs.read(rfd, buf, 0, buf.length, 0, (err, bytes) => {
                if(err) throw err;

               fs.open("text2.txt", "w+", )

            });
        });
        // console.log(stats);
        
    });

