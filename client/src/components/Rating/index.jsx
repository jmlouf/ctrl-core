import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Box, Flex } from "@chakra-ui/react";
import { Rating } from "react-simple-star-rating";
import { UPDATE_PORTFOLIO_RATING } from "../../utils/mutations";

const RatingSystem = ({ user }) => {
  const [rating, setRating] = useState(
    user.portfolio.averagePortfolioRating || 0
  );
  const [updatePortfolioRating] = useMutation(UPDATE_PORTFOLIO_RATING, {
    onCompleted: (data) => {
      // Update the displayed rating with the new average rating
      setRating(data.updatePortfolioRating.portfolio.averagePortfolioRating);
    }
  });

  const handleRating = async (rate) => {
    try {
      await updatePortfolioRating({
        variables: { userId: user._id, rating: rate }
      });
    } catch (error) {
      console.error("Error updating portfolio rating:", error);
    }
  };

  return (
    <Box>
      <h3>Rating</h3>
      <Flex alignItems='center'>
        <Rating
          initialValue={rating}
          onClick={handleRating}
          size={25}
          SVGstyle={{ display: "inline" }}
          transition
          fillColor='orange'
          emptyColor='gray.200'
          allowFraction='true'
        />
        <Box ml='2'>{rating}</Box>
      </Flex>
    </Box>
  );
};

export default RatingSystem;
