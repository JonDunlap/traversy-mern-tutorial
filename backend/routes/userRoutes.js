const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

//  Register a user
router.post('/', registerUser);

// Login
router.post('/login', loginUser);

// Get user info
router.get('/me', protect, getUser);

module.exports = router;
