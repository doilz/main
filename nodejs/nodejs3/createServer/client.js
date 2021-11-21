const http = require("http");

// Option to be used by request 

var options = {
    host: 'localhost',
    port: '3001',
    path: '/helloworld.html'
};



var callback = (response) => {
    var body = "";
    response.on('data', function(data) {     //데이타가 들어오는 이벤트가 됐을때 , 데이타 (html)를 갖고와서 바디에다 데이타를 넣는다.
        body += data;
    }); //나중에 배울 이벤트

    response.on('end', () => {   // 이벤트가 끝날때 콘솔에 바디를 찍어.
        console.log(body);
    }); //end 라는 이벤트 발생
};

var req = http.request(options, callback);
req.end();

