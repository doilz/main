const express = require("express");   //start server 모듈 호출

const mysql = require("mysql"); // db 호출

const path = require('path');

const dotenv = require("dotenv");


dotenv.config({ path: './.env' });  // location of dotenv config file

const host = "127.0.0.1";
const port = 3001;




const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
// const db = mysql.createConnection({       
//     host: 'localhost',
//     user: root,
//     password: 'wlehdlf1',
//     database: 'nodejs'
// });

// const publicDirectory = path.join(__dirname, './public')   //__dirname to the current directory
// app.use(express.static(publicDirectory));
// console.log(__dirname);


const app = express(); 
//start server.


db.connect( (err) => {
    if(err) throw err;

    console.log("MYSQL Connected");
})
//db connect


const publicDirectory = path.join(__dirname, './public' );   // ./public을 현재의 디렉토리에 병합하여 publicDirectory에 대입한다.
console.log(publicDirectory);
app.use(express.static(publicDirectory));
// app.set('view engine', 'pug');
app.set('view engine', 'hbs');

//public dir and veiw engine




app.get("/", (req, res) => {    //req from some kind of a form  // res for throw some
    // res.send("<h1>Home Pages</h1>")
    res.render('index')   //무슨 파일을 렌더링하고싶냐
});

//요청 처리



app.listen(port, () => {
    console.log("Server started on Port 3001")
});  

//요청 리스
