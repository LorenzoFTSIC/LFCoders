import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;


export const ADD_PROJECT = gql`
  mutation AddProject($profile: String!, $createDate: String!, $status: Boolean!, $name: String, $description: String, $github: String) {
    addProject(profile: $profile, createDate: $createDate, status: $status, name: $name, description: $description, github: $github) {
      _id
      name
      description
      skills
      profile
      createDate
      status
      github
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;


export const ADD_USER_TO_PROJECT = gql`
  mutation Mutation($projectId: ID!, $profileEmail: ID!) {
    addUserToProject(projectId: $projectId, profileEmail: $profileEmail) {
      _id
      name
      profile
    }
  }
`;

export const ADD_SKILL_TO_PROFILE = gql`
  mutation Mutation($profileId: ID!, $skillName: ID!) {
    addSkillToProfile(profileId: $profileId, skillName: $skillName) {
      _id
      name
      skills
    }
  }
`;

export const ADD_SKILL_TO_PROJECT = gql`
  mutation Mutation($projectId: ID!, $skillName: ID!) {
    addSkillToProject(projectId: $projectId, skillName: $skillName) {
      name
      skills
      _id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;

// Based off the mini project 
export const EDIT_BIO = gql`
  mutation editBio($_id: String!, $bio: String!) { 
    editVote(_id: $_id, bio: $bio) { 
      _id 
      name
      email
      password
      skills
      bio
    }
  }
`