const fileSystem = require("fs");
// fileSystem이라는 변수에 파일시스템이라는 모듈이 요청되어 선언된 상태
var buf = Buffer.alloc(1024);    // 1kilo bytes
// buf 라는 변수 선언 = 1024바이트의 버퍼를 갖고 있는 


console.log("Open existing input.txt file ! ! !");
fileSystem.open('input.txt', 'r+', (err, fd)=>{   //fd 파일 디스크립터
    if(err) return console.error(err);

    console.log("input.txt open sucess");
    console.log("Reading input.txt file ! ! !");
    fileSystem.read(fd, buf, 0, buf.length, 0, (err, bytes, bf) => { //fd, buf, 오프셋 길이
        if(err) return console.error(err);

        console.log("input.txt reading success ! ! !");
        if(bytes > 0) console.log(buf.slice(0, bytes).toString());

        fileSystem.close(fd, (err) => {
            if(err) return console.error(err);

            console.log("input.txt closed success");
        });  // 열린놈 닫음
    })  ;
});
