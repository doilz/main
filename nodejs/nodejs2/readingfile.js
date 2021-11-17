const fs = require("fs");
var buf = Buffer.alloc(1024); 

console.log("Open existing file ! ! !");
fs.open('input.txt', 'r+', function(err, fd){    // fd : 파일인지 소켓인지 알려줌
    if(err) return console.error(err);

    console.log("File open success!!!");
    console.log("=================================");
    console.log("Reading file ! ! !");

    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if(err) return console.error(err);

        console.log("Reading file success");

        if(bytes > 0) console.log(buf.slice(0, bytes).toString());
    });
});   //  리딩 + 저장가능
