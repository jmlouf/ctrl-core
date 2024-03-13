import decode from "jwt-decode";

// Encapsulate methods for authentication.
class AuthService {
  getProfile() {
    // Get user profile info by decoding JWT from getToken().
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if user is logged in via token existence and its expiration.
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // Checks if token is expired.
  isTokenExpired(token) {
    try {
      // Decode token.
      const decoded = decode(token);
      // Compare token's expiration with current time.
      // If expiration is less than current timestamp, expired => returns true.
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage.
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    // Saves user token to localStorage.
    localStorage.setItem("id_token", idToken);

    // Redirects user to root URL ('/').
    window.location.assign("/");
  }

  logout() {
    // Clear user token and profile data from localStorage.
    localStorage.removeItem("id_token");
    // Reload page and reset the state of the application.
    window.location.reload();
  }
}

export default new AuthService();
