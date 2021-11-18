const fs = require('fs');

fs.readdir('./temp/hellodir/', (err, files) => {    // 
    if(err) throw err;

    files.forEach((file)=>{     // 

    fs.unlink('./temp/hellodir/' + file, (err) => {  // ./temp/hellodir/${file}
        if(err) throw err;
    })});

    fs.rmdir('./temp/hellodir', (err) => {
        if(err) throw err;

        console.log("remove dir success");
    })
});

// 렝스 길이가 길때 지우고 0일때 안지우고
