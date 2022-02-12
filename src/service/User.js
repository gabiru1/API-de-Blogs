const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const emailExist = await User.findOne({ where: { email } });
  const newUser = await User.create({ displayName, email, password, image });

  if (emailExist) return { code: 409, message: 'User already registered' };

  return newUser;
};

const checkLogin = async (email) => {
  const user = User.findOne({ where: { email } });

  console.log(user);

  if (!user) return { code: 400, message: 'Invalid fields' };

  return user;
};

module.exports = {
  createUser,
  checkLogin,
};