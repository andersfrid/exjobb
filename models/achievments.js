const mongoose = require('mongoose');
const config = require('../config/database');

const AchievmentSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  reward:{
    type:String,
    required:true
  }
});

const Achievment = module.exports = mongoose.model('Achievment', AchievmentSchema);

module.exports.showAchievments = function({}, callback){
  Achievment.find({}, callback);
}
