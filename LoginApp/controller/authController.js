const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/userModel');


router.post("/register", function  (req,res){
   let hashPassword = bcrypt.hashSync(req.body.password);
   console.log(hashPassword);
//    User.create({
//     name : req.body.name,
//     email : req.body.email,
//     password : hashPassword,
//     phone : req.body.phone,
//     role : req.body.role
//    });

});


module.exports = router;
