const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]
    bio: String 
    status: String
  }

  type Project {
    _id: ID
    name: String
    description: String
    skills: [Skill]
    profile: [Profile]
    createDate: String
    status: Boolean
    github: String
  }

  type Skill {
    _id: ID
    name: String
    stackType: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    projects: [Project]!
    project(projectId: ID!): Project
    skills: [Skill]!
    skill(skillId: ID!): Skill
    profileBySkill( skillName: String ): [Profile]
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }


  type Mutation {
    addProject(name: String, description: String, profile: String!, createDate: String!, status: Boolean!, github: String): Project
    addProfile(name: String!, email: String!, password: String!, bio: String, status: String): Auth
    addSkill(name: String!, stackType: String!): Skill
    login(email: String!, password: String!): Auth

    addUserToProject(projectId: ID!, profileId: ID!): Project
    addSkillToProject(projectId: ID!, skillId: ID!): Project
    addSkillToProfile(profileId: ID!, skillName: ID!): Profile

    removeProfile: Profile
    removeSkill(skillId: ID!): Skill
    removeSkillFromProfile(profileId: ID!, skillName: ID!): Profile
    removeProfileFromProject(projectId: ID!, profileId: ID!): Project
    removeSkillFromProject(projectId: ID!, skillId: ID!): Project

    editBio(profileId: ID!, bio: String!): Profile 
    editStatus(profileId: ID!, status: String!): Profile 
    editProjectName( projectId: ID!, name: String!): Project
    editProjectDesc( projectId: ID!, description: String!): Project
    editProjectStatus( projectId: ID!, status: Boolean!): Project
  }
`;

module.exports = typeDefs;
