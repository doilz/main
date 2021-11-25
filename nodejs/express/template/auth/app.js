const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const session = require("express-session"); //연결된것
const cookieParser = require("cookie-parser");

const host = "127.0.0.1";
const port = 3001;

const app = express();
const upload = multer();


var Users = [];

const dotenv = require("dotenv").config();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());  // ?
app.use(cookieParser());
app.use(session({
    secure: false,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie : {
        maxAge:(1000 * 60 * 100)
    }
}));




app.get('/signup', (req, res) => {
    res.render('signup', {
        message: "hi"
    });
});

app.post('/signup', (req, res) => {
    if(!req.body.id || !req.body.password) {
        res.status("404");
        res.send("Invalid id or password!");
    }
    else {
        Users.filter((user) => {
            if(user.id === req.body.id) {
                res.render('signup', {
                    message: "User Already Exist! Login or choose another user ID"  //session cookie를 사용하겠다는것
                });
            }
        });
        let newUser = {id: req.id, password: req.body.password};
        Users.push(newUser);
        req.session.user = newUser;
        res.redirect('/protected_page');
    }
});


app.listen(port, host, () => {
    console.log(`application is running at http://${host}:${port}`)
});