const express = require('express');
const { createCategory, getAllCategories } = require('../controller/Categories');
const { isValidToken } = require('../middlewares/isValidToken');

const categoriesRoutes = express.Router();

categoriesRoutes.get('/categories', isValidToken, getAllCategories);

categoriesRoutes.post('/categories', isValidToken, createCategory);

module.exports = {
  categoriesRoutes,
};