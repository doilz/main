//익스프레스 서버
const express = require("express");
const app = express();

//루트디렉토리 설정
const path = require("path");

//db
const mysql = require("mysql");

//서버 설정
const port = 3001;

//민감한 서버 설정
const dotenv = require("dotenv");


const exp = require("constants");
const cookieParser = require("cookie-parser");
dotenv.config({ path: './.env'});



//서버 접속정보
const db = mysql.createConnection({              
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});




// 퍼블릭 디렉토리 설정
const publicDirectory = path.join(__dirname, './public')  
app.use(express.static(publicDirectory));                 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
// 뷰엔진 설정
app.set('view engine', 'hbs');                           




// 디비 커넥트
db.connect((err) => {                           
    if(err) throw err;

    console.log("MySQL Conected!!!");
});



// define routes 요청처리 by router  pages.js모듈을 사용한다.
app.use('/', require('./routes/pages'));

// /auth에 요청이 들어오면 /routes/auth를 실행한다.
app.use('/auth', require('./routes/auth'));
// 쿠키파서



// 리슨
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});