const http = require("http");

// Option to be used by request 

var options = {
    host: 'localhost',
    port: '3001',
    path: '/helloworld.html'
};



var callback = (response) => {
    var body = "";
    response.on('data', function(data) {
        body += data;
    }); //나중에 배울 이벤트

    response.on('end', () => {
        console.log(body);
    }); //end 라는 이벤트 발생
};

var req = http.request(options, callback);
req.end();