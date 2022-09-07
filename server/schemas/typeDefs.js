const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]
    github: String
    bio: String 
    status: String
  }

  type Project {
    _id: ID
    name: String
    description: String
    skills: [String]
    profile: [String]
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

    profileBySkill( skillName: [String] ): [Profile]

    projectBySkill( skillName: [String] ): [Project]
    projectByProfile( profileEmail: String ): [Project]
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }


  type Mutation {
    addProject(name: String, description: String, skills: [String], profile: String!, createDate: String!, status: Boolean!, github: String): Project
    addProfile(name: String!, email: String!, skills: [String], password: String!, github: String!, bio: String, status: String): Auth
    addSkill(name: String!, stackType: String!): Skill
    login(email: String!, password: String!): Auth

    addUserToProject(projectId: ID!, profileEmail: ID!): Project
    addSkillToProject(projectId: ID!, skillName: ID!): Project
    addSkillToProfile(profileId: ID!, skillName: ID!): Profile

    removeProfile: Profile
    removeSkill(skillId: ID!): Skill
    removeSkillFromProfile(profileId: ID!, skillName: String!): Profile
    removeProfileFromProject(projectId: ID!, profileEmail: String!): Project
    removeSkillFromProject(projectId: ID!, skillName: String!): Project

    editBio(profileId: String!, bio: String!): Profile 
    editStatus(profileId: ID!, status: String!): Profile 
    editProjectName( projectId: ID!, name: String!): Project
    editProjectDesc( projectId: ID!, description: String!): Project
    editProjectStatus( projectId: ID!, status: Boolean!): Project
  }
`;

module.exports = typeDefs;
