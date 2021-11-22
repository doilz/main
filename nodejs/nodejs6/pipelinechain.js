const fs = require("fs");
const zlib = require("zlib");  // open source zip library



var createReadStream = fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

    console.log("Finished multiple pipeline zlib ! ! !");


// 디렉토리의 파일들을 읽어서 어레이에 저장

