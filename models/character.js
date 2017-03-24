const mongoose = require('mongoose');
const config = require('../config/database');

const CharacterSchema = mongoose.Schema({
  charName:{
    type: String,
    required: true
  },
  charImage:{
    type:String,
    required:true
  },
  playerLvl:{
    type: Number,
    required: true
  },
  xp:{
    type: Number,
    required: true
  },
  playerTitle:{
    type: String,
    required: true
  },
  combat:[{
    health:{
      type: Number,
      required: true
    },
    damage:{
      type: Number,
      required: true
    }
  }],
  combatRecord:[{
    wins:{
      type: Number,
      required: true
    },
    losses:{
      type: Number,
      required: true
    }
  }],
  achievements:[{
    name:{
      type:String
    }
  }]
});

const Character = module.exports = mongoose.model('Character', CharacterSchema);

module.exports.getCharacterById = function(id, callback){
  Character.findById({_id:id}, callback);
}

//HUR SKA VI UPPDATERA MÅSTE LÄRA OSS DET!!
//DMG HP LVL XP Win Loss, Achievment
module.exports.updateChar = function(data, callback){
  if(data.lvl){
    Character.update({_id:data._id},{$set:{playerLvl: data.lvl}}, callback);
  }else if(data.combat){
    Character.update({_id:data._id},{$set:{combat:{health:data.hp, damage:data.dmg}}}, callback);
  }else if(data.combatStats){
    Character.update({_id:data._id},{$set:{combatRecord:{wins:data.wins, losses:data.losses}}}, callback);
  }else if(data.xp){
    Character.update({_id:data._id},{$set:{xp: data.xp}}, callback);
  }else if(data.achiev){
    Character.update({_id:data._id},{$push:{achievements:{name:data.achiev}}}, callback);
  }
}

module.exports.createCharacter = function(newChar, callback){
  newChar.save(callback);
}
