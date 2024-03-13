import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Box, Flex, Link, IconButton, useDisclosure } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaGlobe,
  FaTwitter,
  FaEdit
} from "react-icons/fa";
import SocialsModal from "../SocialsModal";
import { UPDATE_SOCIALS } from "../../../utils/mutations";
import Auth from "../../../utils/auth";

const SocialsLinks = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [socialsLinks, setSocialsLinks] = useState({
    linkedinLink: user.socials.linkedinLink || "",
    githubLink: user.socials.githubLink || "",
    instagramLink: user.socials.instagramLink || "",
    websiteLink: user.socials.websiteLink || "",
    twitterLink: user.socials.twitterLink || ""
  });

  const [updateSocials] = useMutation(UPDATE_SOCIALS);

  const handleSave = async (addedLinks) => {
    console.log(addedLinks);

    try {
      const { data } = await updateSocials({
        variables: {
          linkedinLink: addedLinks.linkedinLink,
          githubLink: addedLinks.githubLink,
          instagramLink: addedLinks.instagramLink,
          websiteLink: addedLinks.websiteLink,
          twitterLink: addedLinks.twitterLink
        }
      });

      if (data.updateSocials) {
        setSocialsLinks({
          linkedinLink: data.updateSocials.socials.linkedinLink,
          githubLink: data.updateSocials.socials.githubLink,
          instagramLink: data.updateSocials.socials.instagramLink,
          websiteLink: data.updateSocials.socials.websiteLink,
          twitterLink: data.updateSocials.socials.twitterLink
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

  const isAuthenticated = Auth.loggedIn();
  const authenticatedUser = Auth.getProfile();

  const isOwner = isAuthenticated && authenticatedUser.data._id === user._id;

  return (
    <Flex flexDirection='column' align='left' justify='space-between'>
      <Flex alignItems='center' m='10px' p='10px'>
        <h2>Socials</h2>
        {isOwner && (
          <IconButton
            icon={<FaEdit size={18} />}
            variant='ghost'
            size='lg'
            onClick={onOpen}
          />
        )}
      </Flex>
      <Box>
        {socialsLinks.websiteLink && (
          <Link
            href={
              isValidUrl(socialsLinks.websiteLink)
                ? socialsLinks.websiteLink
                : "#"
            }
            target='_blank'
          >
            <IconButton icon={<FaGlobe />} variant='ghost' />
            {socialsLinks.websiteLink}
          </Link>
        )}
      </Box>
      <Box>
        {socialsLinks.githubLink && (
          <Link
            href={`https://www.github.com/${socialsLinks.githubLink}`}
            target='_blank'
          >
            <IconButton icon={<FaGithub />} variant='ghost' />
            {socialsLinks.githubLink}
          </Link>
        )}
      </Box>
      <Box>
        {socialsLinks.linkedinLink && (
          <Link
            href={`https://www.linkedin.com/in/${socialsLinks.linkedinLink}`}
            target='_blank'
          >
            <IconButton icon={<FaLinkedin />} variant='ghost' />
            {socialsLinks.linkedinLink}
          </Link>
        )}
      </Box>
      <Box>
        {socialsLinks.instagramLink && (
          <Link
            href={`https://www.instagram.com/${socialsLinks.instagramLink}`}
            target='_blank'
          >
            <IconButton icon={<FaInstagram />} variant='ghost' />
            {socialsLinks.instagramLink}
          </Link>
        )}
      </Box>
      <Box>
        {socialsLinks.twitterLink && (
          <Link
            href={`https://www.twitter.com/${socialsLinks.twitterLink}`}
            target='_blank'
          >
            <IconButton icon={<FaTwitter />} variant='ghost' />
            {socialsLinks.twitterLink}
          </Link>
        )}
      </Box>
      {isOwner && (
        <SocialsModal
          isOpen={isOpen}
          onClose={onClose}
          socialsLinks={socialsLinks}
          onSave={handleSave}
        />
      )}
    </Flex>
  );
};

export default SocialsLinks;
