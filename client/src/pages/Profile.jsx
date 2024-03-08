import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SkillsList from "../components/SkillsList";
import SkillForm from "../components/SkillForm";

import { QUERY_SINGLE_PROFILE, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

// Display user's profile page.
const Profile = () => {
  // Retrieve profileId from URL params.
  const { profileId } = useParams();

  // Execute QUERY_SINGLE_PROFILE to fetch user's data.
  // If no profileId in URL params, execute QUERY_ME for logged in user's information.
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId }
    }
  );

  // Assign data?.me (if QUERY_ME executed) or data?.profile (if QUERY_SINGLE_PROFILE executed).
  const profile = data?.me || data?.profile || {};

  // If user is logged in and profileId matches logged in user's ID, redirect to '/me'.
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to={`/${data.username}`} />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // If no name property, user must be logged in to view profile page.
  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <main>
      <h2>{profileId ? `${profile.name}'s` : "Your"} socials:</h2>

      {profile.skills?.length > 0 && (
        <SkillsList
          skills={profile.skills}
          isLoggedInUser={!profileId && true}
        />
      )}

      <div>
        <SkillForm profileId={profile._id} />
      </div>
    </main>
  );
};

export default Profile;
