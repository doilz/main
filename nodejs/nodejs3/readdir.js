const fs = require('fs');

console.log("Reading directory ! ! !");

fs.readdir('./temp/hellodir', (err, files) => {    
    if(err) throw err;

    files.forEach((file) => {

     fs.unlink(file, (err) => {
    if(err) return console.error(err);

    console.log("delete hellodir files success ! ! !");  
    
        
});
    });
});

