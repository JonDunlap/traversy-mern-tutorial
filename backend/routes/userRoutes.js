const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require('../controllers/userController');

//  Register a user
router.post('/', registerUser);

// Login
router.post('/login', loginUser);

// Get user info
router.get('/:id', getUser);

module.exports = router;
