const express = require('express');
const { createUser } = require('../controller/User');
const { isValidName } = require('../middlewares/isValidName');
const { isValidEmail } = require('../middlewares/isValidEmail');

const userRoutes = express.Router();

userRoutes.post('/', isValidName, isValidEmail, createUser);

module.exports = {
  userRoutes,
};