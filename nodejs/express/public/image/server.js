let express = require('express');
let app = express();

app.use(express.static('public')); //public을 스태틱하게

app.get('/', (req, res) => {
    res.send("hello world.");
});

var server = app.listen(3001, (req, res) => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Listening at http://$s:$s", host, port);
});
