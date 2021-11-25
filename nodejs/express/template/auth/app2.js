const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv').config();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(upload.array());
app.use(cookieParser());
app.use(session({
    secure : false,
    name: 'codeil',
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie : {
        maxAge:(1000 * 60 * 100)
    }
}));

const host = "127.0.0.1"
const port = 3001;

var Users = [];

app.get('/signup', (req, res)=>{
    res.render('signup', {        
        message: "User Alread Exists! Login or choose another user id"
    }); 
})

app.post('/signup', (req, res) =>{
    if(!req.body.id || !req.body.password){
        res.status("404")
        res.send("Invalid id or password")
    }
    else{
        Users.filter((user) =>{
            if(user.id === req.body.id){
                res.render('signup', {      
                    message: "User Alread Exists! Login or choose another user id"
                });
            }
        });

        let newUser = {id: req.body.id, password: req.body.password};
        Users.push(newUser)
        req.session.user = newUser;    
        res.redirect('/protected_page') //page를 전환한다
    }
});

app.listen(port, host, () => {
    console.log(`Application server running at http://${host}:${port}/`);
})