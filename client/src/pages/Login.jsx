import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = () => {
  // Initialize email and password as empty strings with useState hook.
  const [formState, setFormState] = useState({ email: "", password: "" });
  // Define login mutation function with error and data properties from mutation result.
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // Update state based on form input changes.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      // Spread syntax for existing state.
      ...formState,
      // Update specific field with new value.
      [name]: value
    });
  };

  // Submit form.
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      // Call login mutation function with formState variables.
      const { data } = await login({
        variables: { ...formState }
      });

      // Get token from response and pass to Auth.login() to log in user.
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // Clear form values.
    setFormState({
      email: "",
      password: ""
    });
  };

  return (
    <main>
      <section id="login-area"className='card'>
        <h4 className='card-header bg-dark text-light p-2'>Login</h4>
        <article className='card-body'>
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to='/'>back to the homepage.</Link>
            </p>
          ) : (
            <form id="login-form" onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Enter Email'
                name='email'
                type='email'
                id="email-input"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Enter Password'
                name='password'
                type='password'
                id="password-input"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className='btn btn-block btn-primary'
                style={{ cursor: "pointer" }}
                type='submit'
                id="login-submit"
              >
                Submit
              </button>
            </form>
          )}
          {error && (
            <div className='my-3 p-3 bg-danger text-white'>{error.message}</div>
          )}
        </article>
      </section>
    </main>
  );
};

export default Login;
