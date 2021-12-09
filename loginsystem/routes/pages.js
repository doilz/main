const express = require("express");
const authController = require('../controllers/auth');

const router = express.Router();



router.get('/', (req, res) => {
    res.render('index');
    console.log('index rendered');
});

router.get('/register', (req, res) => {
    res.render('register');
});


router.get('/login', (req, res) => {
    res.render('login');
});


module.exports = router;