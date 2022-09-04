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
    },

    profileBySkill: async (parent, { skillName }) => {
      return Profile.find({ skills:  { $in: [skillName] }})
    },

    projects: async () => {
      return Project.find().populate("profile");
    },

    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId}).populate("profile");
    },

    projectBySkill: async (parent, { skillName }) => {
      return Project.find({ skills:  { $in: [skillName] }})
    },

    projectByProfile: async (parent, { profileEmail }) => {
      return Project.find({ profile:  { $in: [profileEmail] }})
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

    addProject: async (parent, { name, description, skills, profile, createDate, status }) => {
      const project = await Project.create({ name, description, skills, profile, createDate, status })
      return project
    },
    
    addSkill: async (parent, { name, stackType }) => {
      const skill = await Skill.create({ name, stackType })
      return skill
    },

    addProfile: async (parent, { name, email, password, bio, status }) => {
      const profile = await Profile.create({ name, email, password, bio, status });
      const token = signToken(profile);

      return { token, profile };
    },

    editProjectName: async (parent, { projectId, name}) => {
      return Project.findOneAndUpdate(
        { _id: projectId },
        { name: name },
        {
          new: true,
          runValidators: true
        }
      )
    },    

    editProjectDesc: async (parent, { projectId, description}) => {
      return Project.findOneAndUpdate(
        { _id: projectId },
        { description: description },
        {
          new: true,
          runValidators: true
        }
      )
    },

    editProjectStatus: async (parent, { projectId, status}) => {
      return Project.findOneAndUpdate(
        { _id: projectId },
        { status: status },
        {
          new: true,
          runValidators: true
        }
      )
    },

    addUserToProject: async (parent, { projectId, profileEmail }) => {
      return Project.findOneAndUpdate(
        { _id: projectId },
        { $addToSet: { profile: profileEmail } },
        {
          new: true,
          runValidators: true
        }
      );

    },

    addSkillToProject: async (parent, { projectId, skillName }) => {
      return Project.findOneAndUpdate(
        { _id: projectId },
        { $addToSet: { skills: skillName } },
        {
          new: true,
          runValidators: true
        }
      );

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

    
    // Add a third argument to the resolver to access data in our `context`
    addSkillToProfile: async (parent, { profileId, skillName }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      // if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { skills: skillName }
          },
          {
            new: true,
            runValidators: true
          }
        );
      // }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      // throw new AuthenticationError('You need to be logged in!');
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

    editStatus: async (parent, { profileId, status }, context) => {
      // if (context.user) {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { status: status },
        {
          new: true,
          runValidators: true
        }
      );
      // }
    },

    removeSkill: async (parent, { skillId }) => {
      return Skill.findOneAndDelete({ _id: skillId });
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own profile
    removeSkillFromProfile: async (parent, { profileId, skillName }, context) => {
      // if (context.user) {
      return Profile.findOneAndUpdate(
        // { _id: context.user._id },
        { _id: profileId },
        { $pull: { skills: skillName } },
        { new: true }
      );
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },

    removeProfileFromProject: async (parent, { projectId, profileName }) => {
      return Project.findOneAndUpdate(
        { _id: projectId },
        { $pull: { profile: profileName } },
        { new: true }
      );
    },
    removeSkillFromProject: async (parent, { projectId, skillName }) => {
      return Project.findOneAndUpdate(
        { _id: projectId },
        { $pull: { skills: skillName } },
        { new: true }
      );
    },
  }
};

module.exports = resolvers;
