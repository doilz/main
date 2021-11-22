const fs = require('fs');
const zlib = require('zlib');

var remainSourceNumber = 0;
var sourceList = [];


fs.readdir('./source', (err, files) => {
   if(err) throw err;
   console.log(files);

   remainSourceNumber += files.length;
   console.log("Target source files: " + remainSourceNumber);

    files.forEach((file) => {
      
        var sourceName = "";
        var targetName = "";
        sourceList.push(file);
   
        if(remainSourceNumber>0) {
            sourceName += './source/' + file;
            targetName += './target/' + file + '.gz';
           
        var createReadStream = fs.createReadStream(sourceName)
                             .pipe(zlib.createGzip())
                               .pipe(fs.createWriteStream(targetName));
           
        } 
    
    }); 
    
    
    

     
   return false;
});