const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

// @desc    Register a new user
// @route   POST /api/auth/register
exports.registerUser = async (req, res) => {
  console.log("INSIDE REGISTRATION ==================================")
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ token: generateToken(newUser) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login existing user
// @route   POST /api/auth/login
exports.loginUser = async (req, res) => {
  console.log("INSIDE LOGIN +++++++++++++++++++++++++++++++++++++")
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ token: generateToken(user) ,
      message  : "success"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
