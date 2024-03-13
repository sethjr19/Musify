const {registerUser, findUser} = require('../controller/UserController'); 
const Register = require("../controller/UserController")
const express = require('express');

const router = express.Router();

router.get('/getusers', Register.findUser);
router.post('/register', Register.registerUser);

module.exports = router;

