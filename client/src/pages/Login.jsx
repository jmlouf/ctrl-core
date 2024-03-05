import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='container my-1'>
      <Link to='/signup'>Don&apos;t have an account? Signup here!</Link>

      <h2>Login</h2>
      <form>
        <div className='flex-row space-between my-2'>
          <label htmlFor='email'>Email:</label>
          <input
            placeholder='Enter Email'
            name='email'
            type='email'
            id='email'
          />
        </div>
        <div className='flex-row space-between my-2'>
          <label htmlFor='pwd'>Password:</label>
          <input
            placeholder='Enter Password'
            name='password'
            type='password'
            id='pwd'
          />
        </div>
        <div className='flex-row flex-end'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
