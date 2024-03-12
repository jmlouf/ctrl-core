const { User, Project, Comments } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("projects");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("projects");
    },
    projects: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Project.find(params).sort({ createdAt: -1 });
    },
    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("projects");
      }
      throw AuthenticationError;
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addProject: async (
      parent,
      { projectLink, githubLink, description },
      context
    ) => {
      if (context.user) {
        const project = await Project.create({
          projectLink,
          githubLink,
          description,
          projectAuthor: context.user.username
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { projects: project._id } }
        );

        return project;
      }
      throw AuthenticationError;
    },
    addComment: async (parent, { projectId, commentText }, context) => {
      if (context.user) {
        return Project.findOneAndUpdate(
          { _id: projectId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username }
            }
          },
          {
            new: true,
            runValidators: true
          }
        );
      }
      throw AuthenticationError;
    },
    removeProject: async (parent, { projectId }, context) => {
      if (context.user) {
        const project = await Project.findOneAndDelete({
          _id: projectId,
          projectAuthor: context.user.username
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { projects: project._id } }
        );

        return project;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { projectId, commentId }, context) => {
      if (context.user) {
        return Project.findOneAndUpdate(
          { _id: projectId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username
              }
            }
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    updateSocials: async (
      parent,
      { linkedinLink, githubLink, instagramLink, websiteLink, twitterLink },
      context
    ) => {
      if (context.user) {
        const updatedUserLinks = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              "socials.linkedinLink": linkedinLink,
              "socials.githubLink": githubLink,
              "socials.instagramLink": instagramLink,
              "socials.websiteLink": websiteLink,
              "socials.twitterLink": twitterLink
            }
          },
          { new: true }
        );

        return updatedUserLinks;
      }
      throw AuthenticationError;
    },
    updateAvatar: async (_, { avatar }, context) => {
      if (context.user) {
        const updatedUserAvatar = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { avatar } },
          { new: true }
        );

        return updatedUserAvatar;
      }
      throw AuthenticationError;
    },
    updatePortfolio: async (
      parent,
      {
        portfolioLink,
        portfolioImage,
        portfolioLanguages,
        averagePortfolioRating
      },
      context
    ) => {
      if (context.user) {
        const updatedUserPortfolio = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              "portfolio.portfolioLink": portfolioLink,
              "portfolio.portfolioImage": portfolioImage,
              "portfolio.portfolioLanguages": portfolioLanguages,
              "portfolio.averagePortfolioRating": averagePortfolioRating
            }
          },
          { new: true }
        );

        return updatedUserPortfolio;
      }
      throw AuthenticationError;
    }
  }
};

module.exports = resolvers;
