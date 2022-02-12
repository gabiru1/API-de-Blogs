const isValidLoginPassword = (req, res, next) => {
  const { password } = req.body;

  if (password === undefined) return res.status(400).json({ message: '"password" is required' });

  if (password.length === 0) {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  next();
};

module.exports = {
  isValidLoginPassword,
};