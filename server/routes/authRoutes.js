// const express = require('express');
// const router = express.Router();
// const User = require('../models/User'); // adjust if needed
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Register route
// router.post('/register', async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const existing = await User.findOne({ username });
//     if (existing) {
//       return res.status(400).json({ message: 'Username already exists.' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     const token = jwt.sign(
//       { userId: newUser._id, username: newUser.username },
//       process.env.JWT_SECRET,
//       { expiresIn: '1d' }
//     );

//     res.json({ token, message: 'User registered successfully.' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error.' });
//   }
// });

// // ✅ Login route
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     const token = jwt.sign(
//       { userId: user._id, username: user.username },
//       process.env.JWT_SECRET,
//       { expiresIn: '1d' }
//     );

//     res.json({ token, message: 'Login successful' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Route to register a new user
router.post('/register', registerUser);

// Route to login an existing user
router.post('/login', loginUser);

module.exports = router;
