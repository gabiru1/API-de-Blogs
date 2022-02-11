const User = require('../service/User');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await User.createUser(displayName, email, password, image);

  if (newUser.message) return res.status(newUser.code).json({ message: newUser.message });

  return res.status(201).json(newUser);
};

module.exports = {
  createUser,
};