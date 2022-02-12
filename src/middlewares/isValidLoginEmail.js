const isValidLoginEmail = (req, res, next) => {
  const { email } = req.body;

  if (email === undefined) return res.status(400).json({ message: '"email" is required' });
  
  if (email.length === 0) {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  next();
};

module.exports = {
  isValidLoginEmail,
};