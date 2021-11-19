const http = require('http');
const url = require("url");

const port = 3001;
const strIp = '127.0.0.1';


var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset-utf8'});
    var strQuery = url.parse(req.url, true).query;  //string으로 받을거라 req에서 받은 url을 파싱해서
    var text = strQuery.year + " " + strQuery.month;
    res.end(text);
});


server.listen(port, strIp, () => {
    console.log(`Server running at http://${strIp}:${port}`);
});

