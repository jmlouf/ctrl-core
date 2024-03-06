const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        projects: [Project]!
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
        addComment(projectId: ID!, commentText: String!): Project
        removeProject(projectId: ID!): Project
        removeComment(projectId: ID!, commentId: ID!): Project
    }
`;

module.exports = typeDefs;