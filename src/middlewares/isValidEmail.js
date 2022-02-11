const isValidEmail = async (req, res, next) => {
  const { email } = req.body;

  const regex = /\S+@\S+\.\S+/;
  const validEmail = regex.test(email);
  
  if (!email) return res.status(400).json({ message: '"email" is required' });

  if (!validEmail) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  next();
};

module.exports = { isValidEmail };