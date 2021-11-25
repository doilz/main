const express = require('express');
let app = express();    // creat server.

app.get('/', (req, res)=>{
    console.log("Get request for /(root pages).");
    res.send('Hello Get /');
});

app.post('/', function(req, res) {
    console.log("Got a post request the root page.")
    res.send('hell Post /')
});

app.delete('/del_user', function(req, res) {
    console.log('get Delete user for /del_user');
    res.send("hello delete");
});

app.get('/list_user', (req, res) => {
    console.log("get /list_user");
    res.send("User listing to page");
});


app.get('/ab*cd', (req, res)=>{
    console.log("Get request for /ab*cd");
    res.send("Display pattern matching route");
});  //ab 와 cd 사이에 들어가는 모든 것은 다 



var server = app.listen(3001, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http::/%s:%s", host, port);
});


// get은 언제나
// post는 