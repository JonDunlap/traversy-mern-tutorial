import { useState, useEffect } from 'react';
// import { useAuthContext } from '../hooks/useAuthContext';
import { FaSignInAlt } from 'react-icons/fa';

function Login(state) {
  // const { dispatch } = useAuthContext();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    // dispatch({ type: 'RESET' });
    e.preventDefault();
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          {/* email input */}
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              name='email'
              id='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          {/* password input */}
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          {/* submit button */}
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default Login;
