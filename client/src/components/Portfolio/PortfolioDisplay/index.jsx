import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Box,
  Flex,
  Image,
  Badge,
  useDisclosure,
  Link,
  IconButton
} from "@chakra-ui/react";
import { FaEdit, FaGlobe } from "react-icons/fa";
import PortfolioModal from "../PortfolioModal";
import { UPDATE_PORTFOLIO } from "../../../utils/mutations";

const PortfolioDisplay = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [portfolioDisplay, setPortfolioDisplay] = useState({
    portfolioLink: user.portfolio.portfolioLink || "",
    portfolioImage: user.portfolio.portfolioImage || "",
    portfolioLanguages: user.portfolio.portfolioLanguages || [""],
    averagePortfolioRating: user.portfolio.averagePortfolioRating
  });

  const [updatePortfolio] = useMutation(UPDATE_PORTFOLIO);

  const handleSave = async (addedPortfolio) => {
    console.log(addedPortfolio);

    try {
      const { data } = await updatePortfolio({
        variables: {
          portfolioLink: addedPortfolio.portfolioLink,
          portfolioImage: addedPortfolio.portfolioImage,
          portfolioLanguages: addedPortfolio.portfolioLanguages,
          averagePortfolioRating: addedPortfolio.averagePortfolioRating
        }
      });

      if (data.updatePortfolio) {
        setPortfolioDisplay({
          portfolioLink: data.updatePortfolio.portfolio.portfolioLink,
          portfolioImage: data.updatePortfolio.portfolio.portfolioImage,
          portfolioLanguages: data.updatePortfolio.portfolio.portfolioLanguages,
          averagePortfolioRating:
            data.updatePortfolio.portfolio.averagePortfolioRating
        });
      }
    } catch (error) {
      console.error("Error updating social links:", error);
    }
  };

  // General URL validation.
  const isValidUrl = (url = true) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <Flex flexDirection='column'>
      <h2>Portfolio</h2>
      <Box>
        {portfolioDisplay.portfolioLink && (
          <Link
            href={
              isValidUrl(portfolioDisplay.portfolioLink)
                ? portfolioDisplay.portfolioLink
                : "#"
            }
            target='_blank'
          >
            <IconButton icon={<FaGlobe />} variant='ghost' />
            {portfolioDisplay.portfolioLink}
          </Link>
        )}
      </Box>
      <Box>
        {portfolioDisplay.portfolioImage && (
          <Image
            src={`data:image/jpeg;base64,${user.portfolio.portfolioImage}`}
            alt='Portfolio Image'
          />
        )}
      </Box>
      <Box>
        <h3>Programming Languages</h3>
        {portfolioDisplay.portfolioLanguages.map((language, index) => (
          <Badge key={index} mr='1' colorScheme='blue'>
            {language}
          </Badge>
        ))}
      </Box>
      <Box>
        <h3>Rating</h3>
        <span>{portfolioDisplay.averagePortfolioRating}</span>
      </Box>
      <PortfolioModal
        isOpen={isOpen}
        onClose={onClose}
        portfolioDisplay={portfolioDisplay}
        onSave={handleSave}
      />
      <IconButton icon={<FaEdit />} variant='ghost' onClick={onOpen} />
    </Flex>
  );
};

export default PortfolioDisplay;
