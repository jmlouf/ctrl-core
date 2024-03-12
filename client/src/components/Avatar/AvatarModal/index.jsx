import React, { useState, useRef } from "react";
import { MdCloudUpload } from "react-icons/md";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  Image,
  Button
} from "@chakra-ui/react";
import "./AvatarModal.css";

const AvatarModal = ({ isOpen, onClose, avatarDisplay, onSave }) => {
  const [addedAvatar, setAddedAvatar] = useState(avatarDisplay);
  const fileInputRef = useRef(null);

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAddedAvatar({ avatar: reader.result });
        }
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(addedAvatar);
    console.log(addedAvatar);
    onClose();
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Avatar</ModalHeader>
        <ModalBody>
          <FormControl>
            <Input
              type='file'
              id='uploadImage'
              className='uploadBox'
              onChange={handleUploadImage}
              ref={fileInputRef}
              display='none'
            />
            {addedAvatar.avatar ? (
              <Image
                src={addedAvatar.avatar}
                alt='User Avatar'
                boxSize='150px'
                objectFit='cover'
                borderRadius='full'
              />
            ) : (
              <MdCloudUpload />
            )}
            <Button colorScheme='yellow' onClick={handleUploadClick}>
              Select Image
            </Button>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue' onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AvatarModal;
