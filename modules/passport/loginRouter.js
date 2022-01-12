// var express=require('express');
// var router=express.Router();
// var passport=require('./index');
// var jwt = require('jsonwebtoken');
const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('./index');
const router = express.Router();
router.post('/',passport.authenticate('local',{session:false}),(req, res, next)=>{
    res.json({
        content:req.user,
        tokenAccess:jwt.sign({
            id:req.user.id,
            username:req.user.username,
            isadmin:req.user.isadmin
        },
        'secret',
        { expiresIn:'1h'})
    });
});

module.exports = router;