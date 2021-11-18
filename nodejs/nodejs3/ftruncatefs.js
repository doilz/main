const fs = require('fs');
var buf = Buffer.alloc(1024);     // alloc c++, c에서도 사용

console.log("Opne input.txt file");

fs.open('input.txt', 'r+', (err, fd) => {
    if(err) return console.error(err);

    console.log("=====================================================")
    console.log("input.txt Open success ! ! !")
    console.log("=====================================================")
    console.log("truncate input.txt file after 20 bytes! ! !");
    console.log("=====================================================")
    
    
    fs.ftruncate(fd, 20, (err) => {                 // 앞에서부터 20만큼 남긴다.
        if(err) return console.log(err);

        console.log("input.txt file trucated success ! ! !");
        console.log("=====================================================")
        console.log("reading input.txt file ! ! ! ")
        console.log("=====================================================")

        fs.read(fd, buf, 0, buf.length, 0, (err, bytes, Buffer) => {             // fd, 버퍼에 - 부터 buf렝스만큼 0부터 err 바이츠 버퍼
            if(err) return console.error(err);

            if(bytes > 0) {
                  console.log(buf.slice(0, bytes.toString()));                                  // 바이트가 0보다 크다는 것은 파일이 존재해서 읽었다는 소리 
            }
                fs.close(fd, (err) => {
                    if(err) return console.error(err);

                    console.log("input.txt file closed success ! ! !")
                });
        })
    })
   
});
