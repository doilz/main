const express = require("express");
const app = express();   // 'creatServer랑 동`


const host = '127.0.0.1';
const port = 3001;

app.get('/hello', (req, res) => {
    res.send("Hello World!")
});

app.post('/hello', (req, res) => {
    res.send("you just called the post method at '/hello'")
});

app.listen(port, host, () => {
    console.log(`Application Server is running at http://${host}:${port}`)
});

