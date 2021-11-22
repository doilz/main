const fs = require("fs");   // 

var buf = Buffer.alloc(20480);   // 2메가, 
var pos = 0;   // file position moving check
var remainSize = 0;  // 리메인 카피 사이즈
var srcFileName = "";  // 대상파일 네임
var destFileName = "";  // 카피할 파일네임을 갖고 있으려고 했다.
var strStar = "";

console.log("Starting Process....")
fs.readdir("./metal/",(err, files) => {   // 비동기 asyncro 파일 읽기 , 소스디렉토리 있는애를 찾아 파일들이 불러들어옴
    if(err) throw err;
    
    console.log("Reading Directories")

    scrFileName = "./source" + file;     
    destFileName = "./target" + file;

    console.log("source and target file selected.")

    files.forEach(file); {   // 비동기 콜백
        if(file === "metal.avi") {
            console.log("target found!");

            fs.stat(srcFileName, (err, stats) => {   // 비동기
                
                remainSize = stats.size;  // 모든 사이즈
                // console.log("filename = " + ) 디버깅

            }); 

            var rfd = fs.openSync(srcFileName, 'r');   // 
            var wfd = fs.openSync(destFileName, 'a');  // 어펜드
        
            var readBytes = 0;
            while(true) {
                readBytes = fs.readSync(rfd, buf, 0, buf.length, pos);   //rfd=콜바밸//콜바레 변수의 주소값을 넘겨줘서 값을 가져다쓸수 있음 메모리참조, 콜바이 밸류는 값만 보내서 못씀.
                if(readBytes > remainSize) {
                    fs.writeSync(wfd, buf, 0, buf.length, pos);
                    pos += readBytes;
                    remainSize -= readBytes;
                    strStar += "*";
                    console.log(strStar);
 
                } else {
                    fs.writeSync(wfd, buf, 0, readBytes)   // 마지막, 읽은 만큼만 저장하고 나감. // wfd가 어펜드를 썼기 때문에 
                    fs.closeSync(rfd);
                    fs.closeSync(wfd);
                    break;
                }

            }
            
        };
        return false     // forEach , 함수를 빠져나오려면 리턴 , 브레이크는 안먹음
    };
});


