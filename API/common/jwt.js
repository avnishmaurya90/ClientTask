const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (req.url.includes('/api/login')) {
    return next();
  }

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = validateToken;