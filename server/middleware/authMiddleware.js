// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // Check if Authorization header is present and formatted correctly
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ message: '❌ Authorization token missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // e.g., { id: user._id, username: user.username }
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: '❌ Invalid or expired token', error: error.message });
  }
}

module.exports = authMiddleware;
