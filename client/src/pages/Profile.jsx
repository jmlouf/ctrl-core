import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// Socials:

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

  // If user is logged in and username matches logged in user's ID, redirect to '/${user?.username}'.
  // TODO: User options.
  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
    // User logged in and looking at their own profile.
    // Add edit options here?
    // return <Navigate to={`/${user?.username}`} />;
  }

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

  return (
    <main>
      <h2>{username ? `${user.username}'s` : "Your"} socials:</h2>

      {/* {user.projects?.length > 0 && (
        <SocialsList
          projects={user.projects}
          isLoggedInUser={!username && true}
        />
      )} */}

      <div>
        {/* <SocialsForm userId={user._id} /> */}
        Test
      </div>
    </main>
  );
};

export default Profile;
