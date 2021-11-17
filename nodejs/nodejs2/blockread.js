var fs = require("fs");  //파일 입출력

var data = fs.readFileSync('input.txt');  // 파일 데이터에 읽음

console.log(data.toString());
console.log("Program finished");
