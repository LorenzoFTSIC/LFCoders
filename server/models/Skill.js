const { Schema, model } = require('mongoose');

const skillSchema = new Schema({
  // name of the skill ( ex bootstrap, node, mongodb, etc)
  name: { 
    type: String,
    required: true,
    unique: true,
  },
  // referring to where the skill is applied to (ex bootstrap would have frontend, mongodb would have backend, etc)
  stackType: {
    type: String,
    required: true,
  },
});

const Skill = model('Skill', skillSchema);

module.exports = Skill;
