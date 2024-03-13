const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Not a valid email!"]
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project"
    }
  ],
  socials: {
    linkedinLink: {
      type: String,
      maxlength: 500
    },
    githubLink: {
      type: String,
      maxlength: 500
    },
    instagramLink: {
      type: String,
      maxlength: 500
    },
    websiteLink: {
      type: String,
      maxlength: 500
    },
    twitterLink: {
      type: String,
      maxlength: 500
    }
  },
  avatar: {
    type: String,
    default: ""
  },
  portfolio: {
    portfolioLink: {
      type: String,
      default: ""
    },
    portfolioImage: {
      type: String,
      default: ""
    },
    portfolioLanguages: [String],
    averagePortfolioRating: {
      type: Number,
      default: 0
    }
  }
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
