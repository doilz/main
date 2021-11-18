const http = require('http');
const fs = require("fs");
const url = require("url");

var port = 3001;
var strIp = '127.0.0.1';


var server = http.createServer((req, res) => {  //req: 클라이언트의 요청, ip:port 접속
    var pathName = url.parse(req.url).pathname;  // url path 슬래쉬로 구분, 0/1    // parse 가지고 오다 // req.url // pathname 뒤 /슬래시포함 문서명 (예약어)
    // url.parse: 가져오기 (req.url):요청된 url // .pathname: /xxxx.html;

    console.log("request for " + pathName + " recieved ! ! !");

    fs.readFile(pathName.substr(1), (err, data) => {   //pathname: 경로 이름의 // substr(1): 1번째 인덱스부터 갖고 오겠따.
        if(err) {
            console.error(err);

        // http status : 404 : not found.
        // Content Type : text/plain
        res.writeHead(404, {'Content-Type' : 'text/html; charcset-utf8'});
        }
        else {

        // http status : 200 : OK.
        res.writeHead(200, {'Content-Type' : 'text/html; charcset-utf8'});
        res.write(data.toString());
        }

        res.end();
    });
});


server.listen(port, strIp, () => {
    console.log(`Server running at http://${strIp}:${port}`);
});


