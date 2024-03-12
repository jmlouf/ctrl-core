const { Schema, model } = require("mongoose");

const portfolioRatingSchema = new Schema({
  portfolioId: {
    type: Schema.Types.ObjectId,
    ref: "Portfolio",
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
});

const PortfolioRating = model("PortfolioRating", portfolioRatingSchema);

module.exports = PortfolioRating;
