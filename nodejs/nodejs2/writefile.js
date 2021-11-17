const fs = require("fs");

console.log("Write file!!");
fs.writeFile('input.txt', 'This is file writing text in nodejs ! ! !', function(err){
    if(err) return console.error(err);

    console.log("Data written success ! ! !");
    console.log("Read new file data");

    fs.readFile('input.txt', (err, data) => {
        if(err) return console.log(err);

        console.log("Async file reading :" + data.toString());
    });
});
