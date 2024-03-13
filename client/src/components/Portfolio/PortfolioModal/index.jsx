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
  Box,
  Button
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { Rating } from "react-simple-star-rating";

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

  const handleAveragePortfolioRating = (rate) => {
    setAddedPortfolio((prevPortfolio) => ({
      ...prevPortfolio,
      averagePortfolioRating: rate
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Portfolio</ModalHeader>
        <ModalBody>
          <FormControl mt={4}>
            <FormLabel>Portfolio Link</FormLabel>
            <Input
              name='portfolioLink'
              value={addedPortfolio.portfolioLink || ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Portfolio Image</FormLabel>
            <Input type='file' name='websiteImage' onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Programming Languages</FormLabel>
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
          <FormControl>
            <FormLabel>Rating</FormLabel>
            <Rating
              initialValue={addedPortfolio.averagePortfolioRating || 0}
              onClick={handleAveragePortfolioRating}
              size={25}
              SVGstyle={{ display: "inline" }}
              transition
              fillColor='orange'
              emptyColor='gray.200'
              allowFraction='true'
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
