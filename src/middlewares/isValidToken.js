const jwt = require('jsonwebtoken');
require('dotenv').config();

const isValidToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
  });
};

module.exports = {
  isValidToken,
};
