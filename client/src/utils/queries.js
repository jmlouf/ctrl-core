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
      socials {
        linkedinLink
        githubLink
        instagramLink
        websiteLink
        twitterLink
      }
      avatar
      portfolio {
        portfolioLink
        portfolioImage
        portfolioLanguages
        averagePortfolioRating
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
      socials {
        linkedinLink
        githubLink
        instagramLink
        websiteLink
        twitterLink
      }
      avatar
      portfolio {
        portfolioLink
        portfolioImage
        portfolioLanguages
        averagePortfolioRating
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
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
      socials {
        linkedinLink
        githubLink
        instagramLink
        websiteLink
        twitterLink
      }
      avatar
      portfolio {
        portfolioLink
        portfolioImage
        portfolioLanguages
        averagePortfolioRating
      }
    }
  }
`;
