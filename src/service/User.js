const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const emailExist = await User.findOne({ where: { email } });
  const newUser = await User.create({ displayName, email, password, image });

  if (emailExist) return { code: 409, message: 'User already registered' };

  return newUser;
};

module.exports = {
  createUser,
};