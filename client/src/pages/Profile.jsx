import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Flex, Box } from "@chakra-ui/react";

import SocialsLinks from "../components/Socials/SocialsLinks";
import AvatarDisplay from "../components/Avatar/AvatarDisplay";
import PortfolioDisplay from "../components/Portfolio/PortfolioDisplay";

import { QUERY_SINGLE_USER } from "../utils/queries";

import Auth from "../utils/auth";

// Display user's profile page.
const Profile = () => {
  // Retrieve username from URL params.
  const { username } = useParams();

  // Execute QUERY_SINGLE_USER to fetch user's data.
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username }
  });

  // Assign data?.user because QUERY_SINGLE_USER is executed.
  const user = data?.user || {};
  const isLoggedInUser =
    Auth.loggedIn() && Auth.getProfile().data.username === username;

  if (loading) {
    return <div>Loading...</div>;
  }

  // If no username property, user must be logged in to view profile page.
  if (!user?.username) {
    return (
      <h4>
        <Link to='/login'>Click here to log in</Link> and view your profile
        page.
      </h4>
    );
  }

  if (isLoggedInUser) {
    <Navigate to={`/${Auth.getProfile().username}`} />;

    return (
      <Flex justifyContent='flex-start' m='10'>
        <Flex flexDirection='column'>
          <AvatarDisplay user={user} />
          <h2>@{user.username}</h2>
        </Flex>
        <Flex ml={10} flexDirection='column'>
          <Flex>
            <SocialsLinks user={user} />
          </Flex>
          <Flex>
            <PortfolioDisplay user={user} />
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <>
      <h2>@{user.username}'s Profile</h2>
    </>
  );
};

export default Profile;
