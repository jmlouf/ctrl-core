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
  FormLabel,
  Input,
  Box,
  Button
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";

const programmingLanguages = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "cpp", label: "C++" },
  { value: "ruby", label: "Ruby" },
  { value: "php", label: "PHP" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
  { value: "go", label: "Go" }
];

const PortfolioModal = ({ isOpen, onClose, portfolioDisplay, onSave }) => {
  const [addedPortfolio, setAddedPortfolio] = useState(portfolioDisplay);
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

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddedPortfolio((prevPortfolio) => ({
      ...prevPortfolio,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(addedPortfolio);
    console.log(addedPortfolio);
    onClose();
  };

  const handlePortfolioLanguages = (selectedOptions) => {
    setAddedPortfolio((prevPortfolio) => ({
      ...prevPortfolio,
      portfolioLanguages: selectedOptions.map((option) => option.value)
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Portfolio</ModalHeader>
        <ModalBody>
          <FormControl m={4} mb={10}>
            <FormLabel>Portfolio Link</FormLabel>
            <Input
              name='portfolioLink'
              value={addedPortfolio.portfolioLink || ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl m={4} mb={10} align='center'>
            <FormLabel>Portfolio Image</FormLabel>
            <Input
              type='file'
              id='uploadImage'
              className='uploadBox'
              onChange={handleUploadImage}
              ref={fileInputRef}
              display='none'
            />
            {addedPortfolio.portfolioImage ? (
              <Image
                src={addedPortfolio.portfolioImage}
                alt='User Portfolio'
                boxSize='150px'
                objectFit='cover'
              />
            ) : (
              <MdCloudUpload />
            )}
            <Button colorScheme='yellow' onClick={handleUploadClick}>
              Select Image
            </Button>
          </FormControl>
          <FormControl m={4} mb={10}>
            <FormLabel>Languages Used</FormLabel>
            <Select
              isMulti
              name='portfolioLanguages'
              options={programmingLanguages}
              value={programmingLanguages.filter((option) =>
                addedPortfolio.portfolioLanguages.includes(option.value)
              )}
              onChange={handlePortfolioLanguages}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PortfolioModal;
