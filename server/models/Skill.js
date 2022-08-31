const { Schema, model } = require('mongoose');

const skillSchema = new Schema({
  name: { 
    type: String,
    required: true,
    unique: true,
  },
  stackType: {
    type: String,
    required: true,
  },
});

const Skill = model('Skill', skillSchema);

module.exports = Skill;
