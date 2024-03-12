import React from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Auth from "../../../utils/auth";

const PortfolioCard = ({ user }) => {
  const handleClick = () => {
    if ((!Auth.loggedIn() && !Auth, getProfile())) {
      window.location.assign("/login");
    }
  };

  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      onClick={handleClick}
    >
      {user.avatar && (
        <Image
          src={`data:image/jpeg;base64,${user.avatar}`}
          alt={user.username}
        />
      )}
      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {user.username}
          </Badge>
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {user.projects.map((project) => (
            <Badge key={project._id} mr='1' colorScheme='blue'>
              {project.language}
            </Badge>
          ))}
        </Box>
        {Auth.loggedIn() && (
          <Button as={Link} to={`/${user.username}`} mt='2'>
            View Profile
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default PortfolioCard;
