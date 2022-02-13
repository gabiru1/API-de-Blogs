const Categories = require('../service/Categories');

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const newCategory = await Categories.createCategory(name);

  return res.status(201).json(newCategory);
};

const getAllCategories = async (req, res) => {
  const allCategories = await Categories.getAllCategories();

  res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  getAllCategories,
};