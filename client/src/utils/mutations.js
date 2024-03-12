import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_SOCIALS = gql`
  mutation updateSocials(
    $linkedinLink: String
    $githubLink: String
    $instagramLink: String
    $websiteLink: String
    $twitterLink: String
  ) {
    updateSocials(
      linkedinLink: $linkedinLink
      githubLink: $githubLink
      instagramLink: $instagramLink
      websiteLink: $websiteLink
      twitterLink: $twitterLink
    ) {
      _id
      socials {
        linkedinLink
        githubLink
        instagramLink
        websiteLink
        twitterLink
      }
    }
  }
`;

export const UPDATE_AVATAR = gql`
  mutation updateAvatar($avatar: String!) {
    updateAvatar(avatar: $avatar) {
      _id
      avatar
    }
  }
`;

export const UPDATE_PORTFOLIO = gql`
  mutation updatePortfolio(
    $portfolioLink: String
    $portfolioImage: String
    $portfolioLanguages: [String]
    $averagePortfolioRating: Float
  ) {
    updatePortfolio(
      portfolioLink: $portfolioLink
      portfolioImage: $portfolioImage
      portfolioLanguages: $portfolioLanguages
      averagePortfolioRating: $averagePortfolioRating
    ) {
      _id
      portfolio {
        portfolioLink
        portfolioImage
        portfolioLanguages
        averagePortfolioRating
      }
    }
  }
`;
