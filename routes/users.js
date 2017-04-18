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
    password: req.body.password,
    assignments:[
      { course:"Datavetenskap", assignment:"Lab 1", wAssessed:false, passed:false, handedIn:true, date:"-", msg:"Need to fix if statement" },
      {course:"Datavetenskap", assignment:"Lab 2", wAssessed:false, passed:true, handedIn:true, msg:"Well done"},
      {course:"OOP", assignment:"Lab 1", wAssessed:false, passed:true, handedIn:true, msg:"Well done"},
      {course:"OOP", assignment:"Lab 2", wAssessed:false, passed:true, handedIn:true, msg:"Well done"},
      {course:"OOP", assignment:"Lab 3", wAssessed:false, passed:true, handedIn:true, msg:"Well done"},
      {course:"OOP", assignment:"Lab 4",wAssessed:false, passed:false, handedIn:true, date:"-", msg:"It crashed when i try to run it, fix!"},
      {course:"Datavetenskap", assignment:'Project report', wAssessed:false, passed:false, handedIn:false, date:'1/4'},
      {course:"Datavetenskap", assignment:'Lab 3', wAssessed:false, passed:false, handedIn:false, date:'8/4'},
      {course:"Datavetenskap", assignment:'Lab 4', wAssessed:false, passed:false, handedIn:false, date:'16/4'},
      {course:"Datavetenskap", assignment:'Text writing', wAssessed:false, passed:false, handedIn:false, date:'24/4'},
      {course:"OOP", assignment:'Project report', wAssessed:false, passed:false, handedIn:false, date:'28/4'},
      {course:"OOP", assignment:'Lab 5', passed:false, wAssessed:false, handedIn:false, date:'3/4'},
      {course:"OOP", assignment:'Lab 6', passed:false, wAssessed:false, handedIn:false, date:'8/4'},
      {course:"OOP", assignment:'Lab 7', passed:false, wAssessed:false, handedIn:false, date:'14/4'},
      {course:"OOP", assignment:'Group assignment', wAssessed:false, passed:false, handedIn:false, date:'20/4'}
    ]
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
    res.json({success:true, user:req.user});

});

router.post('/create-char', (req, res, next) => {
  let newChar = new Character({
    charName: req.body.name,
    charImage: req.body.image,
    playerLvl: 1,
    xp: 80,
    playerTitle: 'newbie',
    combat:[{
      health: 140,
      damage: 20
    }],
    combatRecord:[{
      wins: 0,
      losses: 0
    }],
    achievements:[
      { name: "Created character", description:"Created a character", reward:10, collected:false },
      { name: "Play hard, study harder", description:"Handed in your first assignment", reward:10, collected:true},
      { name: "Baby steps", description: "Took part in your first duel", reward:10, collected:false },
      { name: "They grow up so fast", description: "Fought 15 times", reward:100, collected:false },
      { name: "Cheap shot", description: "Won your first duel", reward:10, collected:false },
      { name: "Scalping", description: "Won 20 fights", reward:150, collected:false },
      { name: "Ear collerctor", description: "Won 1337 fights", reward:1000, collected:false }
    ]
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
      res.json({success:true, updatedUser:updatedUser});
    }
  });
});

router.post('/updateAssignment', (req,res,next)=>{
  User.updateAssignment(req.body, (err, data)=>{
    if(err){
      console.log(err);
      res.json({success:false, msg:'Failed update user', err:err});
    }else{
      console.log(data);
      res.json({success:true, data:data});
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

router.get('/level', (req, res, next) =>{
  Levels.getLevels({}, (err,level)=>{
    if(err){
      res.json({success:false, msg:'Failed to get level', err:err});
    }else{
      res.json({success:true, level:level});
    }
  });
});

router.post('/update-char', (req, res, next) => {
  Character.updateChar(req.body, (err,data) =>{
    if(err){
      res.json({success:false, msg:'Failed update char', err:err});
    }else{
      res.json({success:true, data:data});
    }
  });
});

module.exports = router;
