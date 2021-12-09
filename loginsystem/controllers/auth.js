const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });

exports.login = (req, res) => {
    try {
        const { email, userpwd } = req.body;
        //req.body 에서 데이타 받기

        if(!email || !userpwd) {
            return res.status(400).render('login', {
                message: 'Please provide email and password'
            });
            // rest of the code not gonna run
        }
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {

            if( !results || !(await bcrypt.compare(userpwd, results[0].userpwd) ) ) {
                console.log(results);
                res.status(401).render('login', {
                    message: 'email or password is incorrect.'
                    
                });
            } else {
                const id = results[0].id
                const token = jwt.sign({id: id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                console.log('The token is: ' + token);

                const cookieOption = {
                    expiresIn: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }

                 res.cookie('jwt', token, cookieOption);
                 res.status(200).redirect("/");
            }
        })

    } catch (error) {
        console.log(error);
    }



}


exports.register = (req, res) => {
        console.log(req.body);
        const { userid, email, userpwd, pwdConfirm} = req.body;

        db.query('SELECT email from users WHERE email = ?', [email], async (err, results) =>{
            if(err) throw err;

            if(results > 0) {
                return res.render('register', {
                    message : 'That email is already in use'
                });
            } else if( userpwd !== pwdConfirm) {
                return res.render('register', {
                    message: 'Password do not match'
                });
            }
            let hashedPwd = await bcrypt.hash(userpwd, 8);
            console.log(hashedPwd);
            
            db.query('INSERT INTO users SET ?', {userid: userid, userpwd: hashedPwd, email: email,}, (err, results) =>{
                if(err) throw err;
                
                console.log(results);
                return res.render('register', {
                message: 'Register complete.'
                })
            });
        });

        
};