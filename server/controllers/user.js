const User = require('../models/user');
const MongooseHelpers = require('../helpers/mongoose');

exports.auth = function(req, res) {};

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
