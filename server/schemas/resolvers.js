const { AuthenticationError } = require('apollo-server-express');
const { Profile, Skill, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }); 
      // .populate(bio) to get all the bio info 
    },

    projects: async () => {
      return Project.find().populate("profile");
    },

    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId}).populate("profile");
    },

    skills: async () => {
      return Skill.find();
    },

    skill: async (parent, { skillId }) => {
      return Skill.findOne({ _id: skillId });
    },

    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },

  Mutation: {

    addProject: async (parent, { name, description, skills, profile, createDate, completed }) => {
      const project = await Project.create({ name, description, skills, profile, createDate, completed })
      return project
    },

    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addProfile: async (parent, { name, email, password, bio }) => {
      const profile = await Profile.create({ name, email, password, bio });
      const token = signToken(profile);

      return { token, profile };
    },
    // Add a third argument to the resolver to access data in our `context`
    addSkill: async (parent, { profileId, skill }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { skills: skill }
          },
          {
            new: true,
            runValidators: true
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Updating the section. If statement within the component will give it placeholder text if Bio section is empty.
    editBio: async (parent, { profileId, bio }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          { bio: bio },
          {
            new: true,
            runValidators: true
          }
        );
      }
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own profile
    removeSkill: async (parent, { skill }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { skills: skill } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
