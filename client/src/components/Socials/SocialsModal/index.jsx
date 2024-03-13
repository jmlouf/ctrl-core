import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react";

const SocialsModal = ({ isOpen, onClose, socialsLinks, onSave }) => {
  const [addedLinks, setAddedLinks] = useState(socialsLinks);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddedLinks((prevLinks) => ({ ...prevLinks, [name]: value }));
  };

  const handleSave = () => {
    onSave(addedLinks);
    console.log(addedLinks);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Socials</ModalHeader>
        <ModalBody m={4} mb={10}>
          <FormControl mt={4}>
            <FormLabel>Website</FormLabel>
            <Input
              name='websiteLink'
              value={addedLinks.websiteLink || ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>GitHub</FormLabel>
            <Input
              name='githubLink'
              value={addedLinks.githubLink || ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>LinkedIn</FormLabel>
            <Input
              name='linkedinLink'
              value={addedLinks.linkedinLink || ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Instagram</FormLabel>
            <Input
              name='instagramLink'
              value={addedLinks.instagramLink || ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Twitter</FormLabel>
            <Input
              name='twitterLink'
              value={addedLinks.twitterLink || ""}
              onChange={handleChange}
            />
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

export default SocialsModal;
