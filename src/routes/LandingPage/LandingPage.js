import React from 'react';
import Register from '../../components/Register/Register';

class LandingPage extends React.Component {
  render() {
    return (
      <>
      <header role="banner">
        <h1>Ducklings Care Diary</h1>
        <h2>Recording daily care routines</h2>
      </header>
      <section>
        <header>
            <h3>Keeping parents informed</h3>
        </header>
        <p>[<em>placeholder for apple or milk carton icon</em>]</p>
        <p>Help parents and caregivers stay up to date on daily routines like naps, snacks, lunches, and diaper changes, and provide them with a full picture of their child's day at school.</p>
      </section>
      <section>
        <header>
            <h3>Children as individuals</h3>
        </header>
        <p>[<em>placeholder for child icon</em>]</p>
        <p>Tracking daily child care routines and providing thorough documentation ensures teachers are focused on caring for the needs of every individual student.</p>
      </section>
      <section>
        <header>
            <h3>Travel back in time</h3>
        </header>
        <p>[<em>placeholder for clock icon</em>]</p>
        <p>Go back in each student's history to discover trends in student behavior and habits. "When did that cough first start?" "I can't believe how much they have been learning!"</p>
      </section>
      <Register />
      </>
    )
  }
};

export default LandingPage;