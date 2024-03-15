const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Register = require("./controller/UserController")
const routes = require('./routes/routes')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/Users');

app.get("/", (req,res) => {
    res.status(200).json({
        message: 'Welcome to CRUD',
    });
});

app.use('/', routes); 

app.listen(3001, () => {
    console.log("server is running")
})