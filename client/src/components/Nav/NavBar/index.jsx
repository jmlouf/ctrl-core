import "./NavBar.css";
import Auth from "../../../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Box
} from "@chakra-ui/react";
import { QUERY_SINGLE_USER } from "../../../utils/queries";

function NavBar() {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const userProfile = Auth.loggedIn() ? Auth.getProfile() : null;

  const { loading, error, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username: userProfile?.data?.username },
    skip: !Auth.loggedIn()
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error:", error);
    if (!Auth.loggedIn()) {
      navigate("/login");
      return null;
    }
    return <div>Error: {error.message}</div>;
  }

  return (
    <header>
      <nav className='navbar'>
        <h1>
          <Link to='/'>CTRL CORE</Link>
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {Auth.loggedIn() ? (
            <>
              <Menu>
                <MenuButton>
                  <Avatar
                    src={`${data.user.avatar}`}
                    name={data.user.username}
                    boxSize='40px'
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Box>@{data.user.username}</Box>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/${Auth.getProfile().data.username}`}>
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link onClick={logout}>Logout</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <>
              <li>
                <Link to='/images'>Images</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/signup'>Signup</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
