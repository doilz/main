// rmdir 디렉토리 제거, (오직 폴더가 비었을때만);


const fs = require('fs');      // javascript는 싱글 더블이 구분없음.

console.log("Remove Directory ! ! !");
fs.rmdir('./temp/hellodir', (err) => {
    if(err) throw err;

    fs.readdir('./temp/', (err, files)=> {
        if(err) throw err;

        files.forEach((file) => {
            console.log(file);
        });
    });
});

