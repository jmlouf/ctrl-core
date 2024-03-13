import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Box, IconButton, useDisclosure, Image } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import AvatarModal from "../AvatarModal";
import { UPDATE_AVATAR } from "../../../utils/mutations";
import Auth from "../../../utils/auth";

const AvatarDisplay = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [avatarDisplay, setAvatarDisplay] = useState({ avatar: user.avatar });
  const [updateAvatar] = useMutation(UPDATE_AVATAR);

  const handleSave = async (addedAvatar) => {
    console.log(addedAvatar);
    try {
      const { data } = await updateAvatar({
        variables: { avatar: addedAvatar.avatar }
      });
      if (data.updateAvatar) {
        setAvatarDisplay({ avatar: data.updateAvatar.avatar });
      }
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };

  const isAuthenticated = Auth.loggedIn();
  const authenticatedUser = Auth.getProfile();

  const isOwner = isAuthenticated && authenticatedUser.data._id === user._id;

  return (
    <Box className='imageContainer'>
      {isOwner && (
        <IconButton
          icon={<FaEdit size={18} />}
          m='10px'
          variant='ghost'
          size='lg'
          onClick={onOpen}
        />
      )}
      <Box align='center' justify='space-between'>
        {avatarDisplay.avatar ? (
          <Image
            src={avatarDisplay.avatar}
            alt='User Avatar'
            boxSize='150px'
            objectFit='cover'
            borderRadius='full'
          />
        ) : (
          <Box
            boxSize='150px'
            borderRadius='full'
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
      {isOwner && (
        <AvatarModal
          isOpen={isOpen}
          onClose={onClose}
          avatarDisplay={avatarDisplay}
          onSave={handleSave}
        />
      )}
    </Box>
  );
};

export default AvatarDisplay;
