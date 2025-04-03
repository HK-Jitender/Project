"use strict";

var express = require('express');
var AuthController = require('../controllers/AuthController');
var UserValidator = require('../validator/UserValidator');
var router = express.Router();
var auth = require('../middlewares/auth');
var authController = new AuthController();
var userValidator = new UserValidator();
router.post('/register', userValidator.userCreateValidator, authController.register);
router.post('/email-exists', userValidator.checkEmailValidator, authController.checkEmail);
router.post('/login', userValidator.userLoginValidator, authController.login);
router.post('/refresh-token', authController.refreshTokens);
router.post('/logout', authController.logout);
router.put('/change-password', auth(), userValidator.changePasswordValidator, authController.changePassword);
module.exports = router;