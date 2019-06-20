const User = require('../models/user');
const MongooseHelpers = require('../helpers/mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config/dev');

exports.auth = function(req, res) {
  const { email, password } = req.body;

  if (!password || !email) {
    return res.status(422).send({
      errors: [{ title: 'Data missing', detail: 'Provide email and password' }]
    });
  }

  User.findOne({ email }, function(err, user) {
    if (err) {
      return res.status(422).send({
        errors: MongooseHelpers.normalizeErrors(err.errors)
      });
    }

    if (!user) {
      return res.status(422).send({
        errors: [{ title: 'Invalid user', detail: 'User does not exist' }]
      });
    }

    if (user.hasSamePassword(password)) {
      const token = jwt.sign(
        {
          userId: user.id,
          username: user.username
        },
        config.SECRET,
        { expiresIn: '100h' }
      );

      return res.json(token);
    } else {
      return res.status(422).send({
        errors: [{ title: 'Wrong Data', detail: 'Wrong email or password' }]
      });
    }
  });
};

exports.register = function(req, res) {
  const { username, email, password, passwordConfirmation } = req.body;

  if (!password || !email) {
    return res.status(422).send({
      errors: [{ title: 'Data missing', detail: 'Provide email and password' }]
    });
  }

  if (password !== passwordConfirmation) {
    return res.status(422).send({
      errors: [{ title: 'Invalid password', detail: 'Password must match' }]
    });
  }

  User.findOne({ email }, function(err, existingUser) {
    if (err) {
      return res.status(422).send({
        errors: MongooseHelpers.normalizeErrors(err.errors)
      });
    }

    if (existingUser) {
      return res.status(422).send({
        errors: [{ title: 'Invalid email', detail: 'This email is used' }]
      });
    }

    const user = new User({
      username,
      email,
      password
    });

    user.save(function(err) {
      if (err) {
        return res.status(422).send({
          errors: MongooseHelpers.normalizeErrors(err.errors)
        });
      }

      return res.json({ registered: true });
    });
  });
};
