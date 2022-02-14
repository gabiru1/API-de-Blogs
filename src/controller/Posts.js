const jwt = require('jsonwebtoken');
const Posts = require('../service/Posts');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;

  const { data } = jwt.verify(token, process.env.JWT_SECRET);

  const post = await Posts.createPost(title, content, data, categoryIds);

  if (post.message) return res.status(post.code).json({ message: post.message });

  res.status(201).json(post);
};

module.exports = {
  createPost,
};