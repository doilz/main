const http = require('http');
const fs = require('fs');
var port = 5012;
var homePage = '127.0.0.1';

var server = http.createServer((req, res) => {    // 서버 만들기
    fs.readFile('helloworld.html', (err, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html charset-utf8'});     // {'object'}
        res.write(data);
        return res.end();
    });
});    

server.listen(port, homePage, () => {
    console.log(`Creat server......!at http://${homePage}:${port}`);
});     // ``  ''