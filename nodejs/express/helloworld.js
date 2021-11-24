const express = require("express");
const app = express();     //크리에이트 서버 됨.

app.get('/', (req, res) => {   //http 요청 라우팅 미들웨어 get 조회 post 등록
    res.end('hello world');
});

app.get('/hello', (req, res) => {   //라우팅 받을 놈,  req http 요청 res http 응답
    res.end('hello dir');
});s


var server = app.listen(3001, ()=>{
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
});