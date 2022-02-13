const jwt = require('jsonwebtoken');
const User = require('../service/User');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await User.createUser(displayName, email, password, image);

  if (newUser.message) return res.status(newUser.code).json({ message: newUser.message });

  const token = jwt.sign({ data: newUser.dataValues.id }, process.env.JWT_SECRET, jwtConfig);

  return res.status(201).json(token);
};

const checkLogin = async (req, res) => {
  const { email } = req.body;

  const user = await User.checkLogin(email);

  if (user.message) return res.status(user.code).json({ message: user.message });

  const token = jwt.sign({ data: user.dataValues.id }, process.env.JWT_SECRET, jwtConfig);

  return res.status(200).json(token);
};

const getAllUser = async (_req, res) => {
  const users = await User.getAllUser();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.getUserById(id);

  if (user.message) return res.status(user.code).json({ message: user.message });

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  checkLogin,
  getAllUser,
  getUserById,
};