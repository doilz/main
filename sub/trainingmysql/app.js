const express = require("express");  
const path = require('path');
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');

dotenv.config({ path: './.env' }); 
const host = "127.0.0.1";
const port = 3001;
const app = express(); 

const mysql = require("mysql");
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


const publicDirectory = path.join(__dirname, './public' );  
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');


db.connect((err) => {
    if(err) throw err;

    console.log("MYSQL Connected");
})


app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log("Server started on Port 3001")
});  

