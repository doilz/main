//익스프레스 서버
const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
const port = 3001;
const dotenv = require("dotenv");
const exp = require("constants");
dotenv.config({ path: './.env'});



//서버 접속정보
const db = mysql.createConnection({              
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});


// 디비 커넥트
db.connect((err) => {                           
    if(err) throw err;

    console.log("MySQL Conected!!!");
});


// 퍼블릭 디렉토리 설정
const publicDirectory = path.join(__dirname, './public')  
app.use(express.static(publicDirectory));                 

// 뷰엔진 설정
app.set('view engine', 'hbs');                           





// 요청처리

app.get("/", (req, res) => {    //언제든 / 에 도달하면 (req, res)이 펑션을 실행하겠다. 요청, 응답
    // res.send("<h1>Home page</h1>");
    res.render("index");

});

app.get("/register", (req, res) => {
    res.render("register")
});


// 리슨
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});