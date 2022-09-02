import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      bio
      # Add status, skills, GitHub, Img 
    }
  }
`;
// USE THIS IN THE SETTINGS TO UPDATE THE USER INFORMATION 

// Based off the mini project
// export const QUERY_BIO = gql`
//   query profile($_id: String) {
//     profile(_id: $_id) {
//       _id
//       name
//       email
//       password
//       skills
//       bio
//     }
//   }
// `;
// ^ What's happening here is what's happening in the QUERY_ME: I am wanting to grab the informaiton from the profile 
