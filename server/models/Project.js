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
  // references the skill model to have all the skills used on this project
  skills: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Skill'
    },
  ],
  // references profile to get all the users collaborating on this project
  profile: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
  ],
  createDate: {
    type: Date,
    default: Date.now
  },
  // true/false to see if the project is marked "done" or not
  completed: {
    type: Boolean
  }
});

const Project = model('Project', projectSchema);

module.exports = Project;
