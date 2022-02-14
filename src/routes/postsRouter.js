const express = require('express');
const { createPost } = require('../controller/Posts');
const { isValidToken } = require('../middlewares/isValidToken');
const { isValidBlogPost } = require('../middlewares/isValidBlogPost');

const postsRoutes = express.Router();

postsRoutes.post('/post', isValidBlogPost, isValidToken, createPost);

module.exports = {
  postsRoutes,
};