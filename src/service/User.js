const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const emailExist = await User.findOne({ where: { email } });
  const newUser = await User.create({ displayName, email, password, image });

  if (emailExist) return { code: 409, message: 'User already registered' };

  return newUser;
};

const checkLogin = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (!user) return { code: 400, message: 'Invalid fields' };

  return user;
};

const getAllUser = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) return { code: 404, message: 'User does not exist' };

  return user;
};

module.exports = {
  createUser,
  checkLogin,
  getAllUser,
  getUserById,
};