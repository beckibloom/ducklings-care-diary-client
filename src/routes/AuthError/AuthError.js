import React from 'react';
import { Link } from 'react-router-dom';

class AuthError extends React.Component {
  render() {
    return (
      <>
      <header role="banner">
        <h1>Uh oh!</h1>
        <h2>We've hit a snag.</h2>
      </header>
      <section>
        <header>
            <h3>You are not authorized to view this page.</h3>
        </header>
        <p>Please log in or register to continue.</p>
        <p><Link to="/login">Log in</Link></p>
        <p><Link to="/register">Register</Link></p>
      </section>
      </>
    )
  }
}

export default AuthError;