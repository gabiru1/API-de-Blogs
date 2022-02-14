const express = require('express');
const { createPost, getAllPosts } = require('../controller/Posts');
const { isValidToken } = require('../middlewares/isValidToken');
const { isValidBlogPost } = require('../middlewares/isValidBlogPost');

const postsRoutes = express.Router();

postsRoutes.post('/post', isValidBlogPost, isValidToken, createPost);

postsRoutes.get('/post', isValidToken, getAllPosts);

module.exports = {
  postsRoutes,
};