const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
const Character = require('../models/character');
const Achievment = require('../models/achievments');
const Levels = require('../models/levels');
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
            emal: user.email,
            character: user.character
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
    }],
    achievements:[{
      name: "Baby steps"
    }]
  });

  Character.createCharacter(newChar, (err, character) => {
    if(err){
      res.json({success: false, msg:'Failed to create character', err:err});
    }else{
      res.json({success: true, msg:'Character created', newChar:newChar});
    }
  });
});

router.get('/studyhall', (req, res, next) => {
  App.handleMySql({}, (err, mySql)=>{//
    if(err){
      res.json({success:false, msg:'Faild to load mySql information', err:err});
    }else{
      res.json({mySql:mySql});
    }
  });
});

router.get('/achievement', (req, res, next) =>{
  Achievment.showAchievments({}, (err, achievment) =>{
    if(err){
      res.json({success:false, msg:'Failed to load achievments', err:err});
    }else{
      res.json({achievment:achievment});
    }
  });
});

router.post('/setchar', (req, res, next) =>{
  var yass = {
    username: req.body.username,
    id: req.body.character
  }

  User.updateUser(yass,(err, updatedUser) =>{
    if(err){
      res.json({success:false, msg:'Failed to update user with char', err:err});
    }else{
      res.json({updatedUser:updatedUser});
    }
  });

});

router.post('/getchar', (req, res, next) =>{
    Character.getCharacterById(req.body.character, (err,char)=>{
      if(err){
        res.json({success:false, msg: 'Failed to find char', err:err});
      }else{
        res.json({success:true, char:char});
      }
    });
});

router.post('/level', (req, res, next) =>{
  Levels.getLevels({}, (err,level)=>{
    if(err){
      res.json({success:false, msg:'Failed to get level', err:err});
    }else{
      res.json({success:true, level:level});
    }
  });

});

module.exports = router;
