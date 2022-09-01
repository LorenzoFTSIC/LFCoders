const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [Skill]
  }

  type Project {
    _id: ID
    name: String
    description: String
    skills: [Skill]
    profile: [Profile]
    createDate: String
    completed: Boolean
  }

  type Skill {
    _id: ID
    name: String!
    stackType: String!
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
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }


  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    addProject(name: String, description: String, profile: String!, createDate: String!, completed: Boolean! ): Project
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
