const mysql = require("mysql"); // db 호출
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req, res) => {
    console.log(req.body);
    
    const { userid, email, userpwd, pwdConfirm } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {  // ? = [email]
            if(err) throw err;

            console.log(err);

            if(results.length > 0) {
                return res.render('/register', {
                    message: 'That email has already in use.'
                })
            } else if( userpwd !== pwdConfirm ) {
                return res.render('register', {
                    message: 'Passwords do not match'
                })
            }
    
            let hashPassword = bcrypt.hash(userpwd, 8);
            console.log(hashPassword);

            db.query('INSERT INTO users SET?', {userid: userid, email: email, userpwd: hashPassword}, (err, results) => {
                if(err) throw err;

                res.render('register', {
                    message: 'user Registered'
                })
            });
    });
}
