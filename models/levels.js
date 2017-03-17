const mongoose = require('mongoose');
const config = require('../config/database');

const LevelsSchema = mongoose.Schema({
  lvl:{
    type:Number,
    required: true
  },
  xp:{
    type:Number,
    required:true
  },
  health:{
    type:Number,
    required:true
  },
  damage:{
    type:Number,
    required:true
  }
});

const Levels = module.exports = mongoose.model('Levels', LevelsSchema);

module.exports.getLevelById = function(id, callback){
  Levels.findById({_id:id}, callback);
}

module.exports.getLevels = function({}, callback){
  Levels.find({}, callback);
}

module.exports.getLevel = function(lvl, callback){
  Levels.findOne({lvl:lvl}, callback);
}
