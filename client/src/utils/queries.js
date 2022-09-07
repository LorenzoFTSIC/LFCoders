import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      github
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query allProjects {
    projects {
      _id
      name
      description
      skills
      profile
      createDate
      status
    }
  }
`;

export const QUERY_PROJECTS_BY_SKILL = gql`
  query queryProjectBySkill($skillName: [String]) {
    projectBySkill(skillName: $skillName) {
      name
      description
      skills
      profile
      status
    }
  }
`;


export const QUERY_PROFILES_BY_SKILL = gql`
  query Query($skillName: [String]) {
    profileBySkill(skillName: $skillName) {
      _id
      name
      email
      skills
      password
      bio
      github
      status
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      github
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      bio
      status
      github
      email
    }
  }
`;

// Based off the mini project
export const QUERY_BIO = gql`
  query profile($_id: String) {
    profile(_id: $_id) {
      _id
      name
      email
      github
      password
      skills
      bio
    }
  }
`;
