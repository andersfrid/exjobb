const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
const Character = require('../models/character');
const Achievment = require('../models/Achievments');
const App = require('../app');

//Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Faild to register'});
    }else{
      res.json({success: true, msg:'User registerd'});
    }
  });
});

router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUsersByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg:'user not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) =>{
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800
        });

        res.json({
          success:true,
          token: 'JWT '+token,
          user:{
            id: user._id,
            name: user.name,
            username: user.username,
            emal: user.email
          }
        });
      }else{
          return res.json({success: false, msg:'user not found/password'});
      }
    });
  });
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

//Creates a character
/*
  Todo:
    Make it so that is saves its ID to the user.
    So that the user is linked to its character.
*/
router.post('/create-char', (req, res, next) => {
  let newChar = new Character({
    charName: req.body.name,
    charImage: req.body.image,
    playerLvl: 0,
    xp: 0,
    playerTitle: 'newbie',
    combat:[{
      health: 0,
      damage: 0
    }],
    combatRecord:[{
      wins: 0,
      losses: 0
    }]
  });

  Character.createCharacter(newChar, (err, character) => {
    if(err){
      res.json({success: false, msg:'Failed to create character', err:err});
    }else{
      res.json({success: true, msg:'Character created'});
    }
  });
});

router.get('/studyhall', (req, res, next) => {
  App.name();
  App.handleMySql(res,(err, mySql)=>{
    console.log('whaat');
  });

  Achievment.showAchievments({}, (err, achievment) =>{
    if(err){
      res.json({success:false, msg:'Failed to load achievments', err:err});
    }else{
      res.json({achievment:achievment});
    }
  });
});

module.exports = router;
