const express = require("express");
const authController = require('../controllers/auth');

const router = express.Router();



router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('index', {
        user: req.user
        //라우터에서 유저에 
    }
    );
    console.log('index rendered');
});

router.get('/register', (req, res) => {
    res.render('register');
});


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
    //next(); 가 실행되야 다음 펑션이 실행된다.
    if ( req.user ) {
        res.render('profile', {
            user: req.user
        });
    } else {
        res.redirect('login');
    }
    
});


module.exports = router;