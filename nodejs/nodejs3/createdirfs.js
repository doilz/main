// 0777 기본값 , 모든 권한, 윈도우에선 안씀, 리눅스 오픈소스 개념.


const fs = require('fs');

console.log('Create ./hellodir ! ! ! !');
fs.mkdir('./temp/hellodir', (err) => {
    if(err) throw err;

    console.log("creat directory success ! ! !")
});