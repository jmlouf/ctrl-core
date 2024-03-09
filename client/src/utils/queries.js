import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      projects {
        _id
        projectLink
        githubLink
        description
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
      projects {
        _id
        projectLink
        githubLink
        description
        createdAt
      }
    }
  }
`;
