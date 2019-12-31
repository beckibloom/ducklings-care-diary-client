import React from 'react';
import { Link } from 'react-router-dom';

class AuthError extends React.Component {
  render() {
    return (
      <>
      <header role="banner">
        <h1>Uh oh!</h1>
      </header>
      <section>
        <h3>We couldn't match your e-mail with any of our students.</h3>
        <p>If your teacher has registered your student with Ducklings Care Diary, please check that they have your e-mail correctly updated in the system. It must match exactly!</p>
        <p><Link to="/">Return to home page</Link></p>
      </section>
      </>
    );
  };
};

export default AuthError;