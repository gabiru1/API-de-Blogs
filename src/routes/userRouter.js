const express = require('express');
const { createUser } = require('../controller/User');
const { isValidName } = require('../middlewares/isValidName');
const { isValidEmail } = require('../middlewares/isValidEmail');
const { isValidPassword } = require('../middlewares/isValidPassword');

const userRoutes = express.Router();

userRoutes.post('/', isValidName, isValidEmail, isValidPassword, createUser);

module.exports = {
  userRoutes,
};