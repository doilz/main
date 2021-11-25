const express = require("express")
const bodyParser = require("body-Parser");
const multer = require("multer");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const host = "127.0.0.1";
const port = 3001;

const app = express();
const upload = multer();

var Users = [];


const dotenv = require("dotenv").config();

app.set('view engine', 'pug');
app.set('views', './views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());
app.use(cookieParser());
app.use(session({
    secure: false,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: (1000* 60 * 100)
    }
}));

app.get('/adress', (req, res) => {
    res.render('adress', {
        message: "hi"
    });
});


app.post('/adress', (req, res) => {
    if(!req.body.id || !req.body.password) {
        res.status("404");
        res.send("Invalid id or password");
    }
    else {
        Users.filter((user) => {
            if(user.id === req.body.id) {
                res.render("adress", {
                    message: "You are a fake man"
                })
            }
        });
        let newUser = {id: req.id, password: req.body.password};
        Users.push(newUser);
        req.session.user = newUser;  // 
        res.redirect('/return');

    }
});

app.get('/return', function(req, res) {
    res.render('protected_page', {id: req.session.user.id, address: req.session.user.address, address_detail: req.session.user});

  });


app.listen(port, host, () => {
    console.log(`application is running at http://${host}:${port}`)
});