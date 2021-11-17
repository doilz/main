var fs = require('fs');
 var buf = Buffer.alloc(1024);
 
fs.open('test.txt','w',(err, fd) => {
   
    var buf = 'aa aa a\n';
    console.log("open 이후");
    console.log(buf);
    console.log(buf.length);
    
    fs.write(fd,buf,0,buf.length, function(err, written, buffer){
     
        console.log('write 이후');
        console.log("err : "+err,"\n\written :"+written,"\n\buffer "+buffer);
        
    
        fs.close(fd, function(){
    
        });
    }); 
        
});
