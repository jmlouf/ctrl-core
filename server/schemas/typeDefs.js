const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        projects: [Project]!
        socials: Socials
        avatar: String
        portfolio: Portfolio
    }

    type Portfolio {
        portfolioLink: String
        portfolioImage: String
        portfolioLanguages: [String]
        averagePortfolioRating: Float
    }
    
    type Socials {
        linkedinLink: String
        githubLink: String
        instagramLink: String
        websiteLink: String
        twitterLink: String
    }

    type Project {
        _id: ID
        projectLink: String
        githubLink: String
        description: String
        projectAuthor: String
        createdAt: String
        comments: [Comments]!
    }

    type Comments {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        projects(username: String): [Project]
        project(projectId: ID!): Project
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        
        addProject(projectLink: String!, githubLink: String!, description: String!): Project
        removeProject(projectId: ID!): Project

        addComment(projectId: ID!, commentText: String!): Project
        removeComment(projectId: ID!, commentId: ID!): Project

        updateSocials(linkedinLink: String, githubLink: String, instagramLink: String, websiteLink: String, twitterLink: String): User

        updateAvatar(avatar: String!): User

        updatePortfolio(portfolioLink: String, portfolioImage: String, portfolioLanguages: [String], averagePortfolioRating: Float): User
    }
`;

module.exports = typeDefs;
