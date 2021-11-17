const fileSystem = require('fs');
var buf = Buffer.alloc(1024);
var text = ""

// 가로 쓰기

// gugudan = () =>  {
//     for(var i=1;i<10;i++) {
//         for(var k=1;k<10;k++) {
//         let result = i * k;
//         text += i + " * " + k + " = " + result + " ";
        
//         }
//     text += '\n';
//     }
//     return text; //
// };

// 세로 쓰기

gugudan = () =>  {
    for(var i=1;i<10;i++) {
        for(var k=1;k<10;k++) {
        let result = i * k;
        text += i + " * " + k + " = " + result + " ";
        text += '\n';
        }
   
    }
    return text; //
};


fileSystem.open('gugudanPrint.txt', 'r+', (err, fd)=>{
    if(err) return console.error(err);

    fileSystem.write(fd, gugudan(), (err, written, buffer) => {
        if(err) console.error(err);

        
        fileSystem.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
            if(err) return console.error(err);
            console.log("input.txt reading success ! ! !");
            if(bytes > 0) console.log(buf.slice(0, bytes).toString());
    
            fileSystem.close(fd, (err) => {
                if(err) return console.error(err);
    
                console.log("input.txt closed success");
            });  // 열린놈 닫음
        })  ;
    });
    });
