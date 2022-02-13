const express = require('express');
const { createCategory } = require('../controller/Categories');
const { isValidToken } = require('../middlewares/isValidToken');

const categoriesRoutes = express.Router();

categoriesRoutes.post('/categories', isValidToken, createCategory);

module.exports = {
  categoriesRoutes,
};