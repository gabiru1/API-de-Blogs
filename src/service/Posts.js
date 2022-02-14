const { BlogPost } = require('../models');
const { Category } = require('../models');

const createPost = async (title, content, userId, categoryIds) => {
  const allCategories = await Category.findAll();
  let error;

  const exist = (id) => allCategories.some((element) => element.id === id);

  if (!categoryIds) return { code: 400, message: '"categoryIds" is required' };

  categoryIds.forEach((id) => {
    if (!exist(id)) error = { code: 400, message: '"categoryIds" not found' };
  });

  if (error) return error;

  const post = await BlogPost.create({ userId, title, content });

  return post;
};

module.exports = {
  createPost,
};