var fs = require("fs");

fs.readFile('input.txt', function(err, data){   //에러, 읽은 데이터
    if(err) return console.error(err) ; //if문 한줄시 대괄호 노필요

    console.log(data.toString());
});

console.log("Finished program");