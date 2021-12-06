const express = require("express");
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/register', authController.register);

// router.post('/login', authController.login);

// post로만 접근 가능

module.exports = router;