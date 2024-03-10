import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const navigate = useNavigate();

  // Initialize username, email, and password as empty strings.
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Define addUser mutation function with error and data properties from mutation result.
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      // Call addUser mutation function with formState variables.
      const { data } = await addUser({
        variables: { ...formState }
      });

      // Get token from response and pass to Auth.login() to log in the newly registered user.
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <section className='card'>
        <h4 className='card-header bg-dark text-light p-2'>Sign Up</h4>
        <article className='card-body'>
          {data ? (
            <p>
              Success!{" "}
              <Link to={`/${data.user.username}`}>
                Click here to go to your profile!
              </Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Enter Username'
                name='username'
                type='text'
                value={formState.name}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Enter Email'
                name='email'
                type='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Enter Password'
                name='password'
                type='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className='btn btn-block btn-primary'
                style={{ cursor: "pointer" }}
                type='submit'
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

export default Signup;
