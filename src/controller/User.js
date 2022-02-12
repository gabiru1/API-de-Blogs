const jwt = require('jsonwebtoken');
const User = require('../service/User');

const secret = 'kauanmemeder';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await User.createUser(displayName, email, password, image);

  if (newUser.message) return res.status(newUser.code).json({ message: newUser.message });

  console.log(newUser);

  const token = jwt.sign({ data: newUser.dataValues }, secret, jwtConfig);

  return res.status(201).json(token);
};

const checkLogin = async (req, res) => {
  const { email } = req.body;

  const user = User.checkLogin(email);

  if (user.message) return res.status(user.code).json({ message: user.message });

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  res.status(200).json(token);
};

module.exports = {
  createUser,
  checkLogin,
};