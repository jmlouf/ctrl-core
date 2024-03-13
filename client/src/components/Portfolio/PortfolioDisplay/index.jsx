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
import Auth from "../../../utils/auth";
import RatingSystem from "../../Rating";

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
      console.error("Error updating portfolio:", error);
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

  // const isAuthenticated = Auth.loggedIn();
  // const authenticatedUser = Auth.getProfile();

  const isOwner = Auth.loggedIn() && Auth.getProfile().data._id === user._id;

  return (
    <Flex flexDirection='column' alignItems='center'>
      <Flex alignItems='center' p='10px'>
        <h2>Portfolio</h2>
        {isOwner && (
          <IconButton
            icon={<FaEdit size={18} />}
            variant='ghost'
            size='lg'
            onClick={onOpen}
          />
        )}
      </Flex>
      <Box alignItems='center'>
        {portfolioDisplay.portfolioLink && (
          <Link
            href={
              isValidUrl(portfolioDisplay.portfolioLink)
                ? portfolioDisplay.portfolioLink
                : "#"
            }
            target='_blank'
          >
            <IconButton icon={<FaGlobe size={18} />} variant='ghost' />
            {portfolioDisplay.portfolioLink}
          </Link>
        )}
      </Box>
      <Box alignItems='center'>
        {portfolioDisplay.portfolioImage ? (
          <Image
            src={portfolioDisplay.portfolioImage}
            alt='User Portfolio'
            boxSize='200px'
            objectFit='cover'
          />
        ) : (
          <Box
            boxSize='200px'
            bg='gray.200'
            display='flex'
            alignItems='center'
            justifyContent='center'
            fontSize='4xl'
            color='gray.500'
          >
            {user.username.charAt(0).toUpperCase()}
          </Box>
        )}
      </Box>
      <Box align='center'>
        <h3>Languages Used</h3>
        {portfolioDisplay.portfolioLanguages.map((language, index) => (
          <Badge key={index} mr='1' colorScheme='blue'>
            {language}
          </Badge>
        ))}
      </Box>
      <Box align='center'>
        <Flex alignItems='center'>
          <RatingSystem user={user} />
        </Flex>
      </Box>
      {isOwner && (
        <PortfolioModal
          isOpen={isOpen}
          onClose={onClose}
          portfolioDisplay={portfolioDisplay}
          onSave={handleSave}
        />
      )}
    </Flex>
  );
};

export default PortfolioDisplay;
