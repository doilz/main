const express = require("express");
const cookieParser = require("cookie-parser");

const host = '127.0.0.1';
const port = 3001;

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('name', 'express').send('cookie set');  // 쿠키 이름을 익스프레스로 해서 쿠키세트를 보냄
    console.log(cookie);
});

app.get('/clear', (req, res) => {
    res.clearCookie('express');
    res.send('Cookie express cleared.');
});


app.listen(port, host, () => {
    console.log(`application server is running at http://${host}:${port}`);
});
