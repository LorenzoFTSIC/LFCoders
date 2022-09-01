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
    name: String!
    description: String
    skills: [Skill]
    profile: [Profile]!
    createDate: String!
    completed: Boolean!
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
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    // ^ Wouldn't this need the profileID? - MJ 
    removeSkill(skill: String!): Profile

    editBio(profileID: ID!, bio: String!): Profile 
  }
`;

module.exports = typeDefs;
