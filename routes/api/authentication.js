const express = require('express');
const passport = require('passport');
const User = require('../../models/user.js');

const router = express.Router();

// POST to /register
router.post('/register', (req, res, next) => {
  // Create a new user object from the req's JSON.
  const newUser = User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  // Save new user into database using passport register method for security.
  User.register(newUser, req.body.password, (err, user) => {
    if(err) {
      return res.send(JSON.stringify({ error: err }));
    }
    return res.send(JSON.stringify(user));
  });
});

module.exports = router;
