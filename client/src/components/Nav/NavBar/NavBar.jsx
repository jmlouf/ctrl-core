import "./NavBar.css";

import Auth from "../../../utils/auth";
import { Link } from "react-router-dom";

function NavBar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <nav className='navbar'>
        <h1>
          <Link to='/'>ctrl-core logo</Link>
        </h1>

        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {Auth.loggedIn() ? (
            <>
              <li>
                <Link to='/'>
                  {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                  {Auth.getProfile().data.username}&apos;s profile
                </Link>
              </li>
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </>
          ) : (
            <>
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
