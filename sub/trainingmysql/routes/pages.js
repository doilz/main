const express = require("express");
const mysql = require("mysql");
const router = express.Router();



const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});


router.post('/auth/register', (req, res) => {
   
});
// router.post('/auth/register', (req, res) => {
//     // const param = [ req.body.userid, req.body.userpwd,req.body.pwdConfirm, req.body.email ];
  
//     // db.query('INSERT INTO users (userid, userpwd, pwdConfirm, email) VALUES (?,?,?,?)', param, (err, row) => {
//     //     if(err) throw err

//     // });

//     // db.query(`SELECT * FROM users WHERE userid = '${req.body.userid}'`, (err, result) => {
//     //     if(err) throw err;

        

//     //   });
      

//     // res.end();
// })



module.exports = router;