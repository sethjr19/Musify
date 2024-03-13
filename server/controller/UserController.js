const User = require('../models/User');

// Create a new user
const registerUser = (req, res) => {
    User.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
}

const findUser = (req, res) => {
    console.log('Received request to find users');
    User.find()
      .then(users => {
        res.status(200).json(users); // Send the users as JSON response
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' }); // Handle errors
      });
  };

module.exports = {
    registerUser,
    findUser
  };