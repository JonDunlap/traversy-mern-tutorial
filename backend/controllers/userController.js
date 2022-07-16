// @desc Register new user
// @route POST /api/users/
// @access Public
const registerUser = (req, res) => {
  res.json({ message: 'Register a user' });
};

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
  res.json({ message: 'Login a user' });
};

// @desc Get user data
// @route GET /api/users/:id
// @access Public
const getUser = (req, res) => {
  res.json({ message: 'Get user data' });
};

module.exports = { registerUser, loginUser, getUser };
