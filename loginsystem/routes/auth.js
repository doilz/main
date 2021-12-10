const express = require("express");
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/logout', authController.logout);

//auth 필요없음 auth로부터 오기 때문.

module.exports = router;