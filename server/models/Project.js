const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  stackType: {
    type: String,
  },
  skills: {
    type: String,
  },
  profile: {
    type: String,
  },
});

const Project = model('Project', projectSchema);

module.exports = Project;
