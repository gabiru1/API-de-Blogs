const express = require('express');
const { createUser } = require('../controller/User');
const { isValidName } = require('../middlewares/isValidName');
const { isValidEmail } = require('../middlewares/isValidEmail');
const { isValidPassword } = require('../middlewares/isValidPassword');
const { checkLogin } = require('../controller/User');

const userRoutes = express.Router();

userRoutes.post('/user', isValidName, isValidEmail, isValidPassword, createUser);

userRoutes.post('/login', checkLogin);

module.exports = {
  userRoutes,
};