const User = require('../service/User');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await User.createUser(displayName, email, password, image);

  return res.status(200).json(newUser);
};

module.exports = {
  createUser,
};