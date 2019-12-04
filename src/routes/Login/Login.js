import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <>
        <header role="banner">
          <h1>Ducklings Care Diary</h1>
          <h2>Log in</h2>
        </header>
        <section>
          <form className='signup-form'>
              <div>
                <label htmlFor="username">Email</label>
                <input type="text" name='username' id='username' />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' />
              </div>
              <button type='submit'>Sign Up</button>

              <div>
                Don't have a diary yet? <Link to='/register'>Sign up now.</Link>
              </div>
          </form>
        </section>
      </>
    )
  }
}

export default Login;