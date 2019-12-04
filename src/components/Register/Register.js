import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <section>
        <header>
            <h3>Start your journey today</h3>
        </header>
        <form className='signup-form'>
            <div>
              <label htmlFor="first-name">First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label htmlFor="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <div>
              <label htmlFor="user-type">I am a...</label>
              <input type="radio" name="user-type" value="teacher"/>
              <label>Teacher</label>
              
              <input type="radio" name="user-type" value="parent" />
              <label>Parent/Caregiver</label>
            </div>
            <button type='submit'>Sign Up</button>
        </form>
      </section>
    )
  }
}

export default Register;