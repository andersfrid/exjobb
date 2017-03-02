const mongoose = require('mongoose');
const config = require('../config/database');

const CharacterSchema = mongoose.Schema({
  charName:{
    type: String,
    required: true
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
  }]
});

const Character = module.exports = mongoose.model('Character', CharacterSchema);

module.exports.getCharacterById = function(id, callback){
  Character.findById(id, callback);
}

module.exports.createCharacter = function(newChar, callback){
  newChar.save(callback);
}
