const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')




//For login
router.post('/', async (req,res)=>{
    //If email exists
    const user = await User.findOne({email: req.body.email});
if(!user) return res.status(400).send('Wrong Email');


//Password correct
const validPass = await bcrypt.compare(req.body.password, user.password);
if(!validPass) return res.status(400).send('Wrong Password')

//Assigning a jwt
const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
res.header('authToken', token).send(token);
});

module.exports = router ;
