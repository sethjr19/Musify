const User = require('../models/User');

// Create a new user
const registerUser = (req, res) => {
    console.log('req body : ',req.body)
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

const deleteUser = async(req,res) => {
  try{
    const {id} = req.params;
    const deleteduser = await User.findByIdAndDelete(id);
    if(!deleteduser) {
      return res
      .status(404).json({message: 'Cannot find id'})
    }
    res.status(200).json(deleteduser);
  }catch(error) {
    res.status(500).json({message:error.message})
  }
}

module.exports = {
    registerUser,
    findUser,
    deleteUser
  };