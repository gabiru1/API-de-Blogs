const express = require('express');
const { createUser, checkLogin, getAllUser } = require('../controller/User');
const { isValidName } = require('../middlewares/isValidName');
const { isValidEmail } = require('../middlewares/isValidEmail');
const { isValidPassword } = require('../middlewares/isValidPassword');
const { isValidLoginEmail } = require('../middlewares/isValidLoginEmail');
const { isValidLoginPassword } = require('../middlewares/isValidLoginPassword');
const { isValidToken } = require('../middlewares/isValidToken');

const userRoutes = express.Router();

userRoutes.post('/user', isValidName, isValidEmail, isValidPassword, createUser);

userRoutes.get('/user', isValidToken, getAllUser);

userRoutes.post(
  '/login',
  isValidLoginEmail,
  isValidLoginPassword,
  checkLogin,
);

module.exports = {
  userRoutes,
};