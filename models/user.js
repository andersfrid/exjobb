const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
  name:{
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  assignments:[{
    course:{
      type: String,
      required: true
    },
    assignment:{
      type: String,
      required: true
    },
    wAssessed:{
      type:Boolean,
      required:true
    },
    passed:{
      type: Boolean,
      required: true
    },
    handedIn:{
      type: Boolean,
      required: true
    },
    date:{
      type:String,
    },
    msg:{
      type:String
    }
  }],
  character: {
    type: String
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUsersById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUsersByUsername = function(username, callback){
  const query = {username: username};
  User.findOne(query, callback);
}

module.exports.updateUser = function(yass, callback){
  User.update({username: yass.username},{$set:{character: yass.id}}, callback);
}

module.exports.updateAssignment = function(ass, callback){
  User.update({_id:ass._id,"assignments":{$elemMatch:{_id:ass.assignmentId}}},{$set:{"assignments.$.wAssessed":true,"assignments.$.handedIn":true}}, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) =>{
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
