const fs = require('fs');

var data = '';
var readStream = fs.createReadStream('inpu1t.txt');      // input.txt 로 받는다.
readStream.setEncoding('utf-8');   // utf 8 로 설정

readStream.on('data', function(chunk){    //읽을 데이타가 있으면, 청크 데이터 덩어리
    data += chunk;
});  // 핸들러 등록

readStream.on('end', () => {
    console.log(data);
});

readStream.on('error', (err) => {
    console.log(err);
});

console.log("ReadStream file read finished ! ! !");

