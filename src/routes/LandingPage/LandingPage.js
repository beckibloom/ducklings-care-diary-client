import React from 'react';
import Register from '../../components/Register/Register';
import './LandingPage.css';
import AppleJuiceIcon from '../../images/apple-juice.png';
import ClockIcon from '../../images/clock.png';
import PencilIcon from '../../images/pencil.png';

class LandingPage extends React.Component {
  render() {
    return (
      <>
      <header role="banner" className="banner">
        <h1>Ducklings Care Diary</h1>
        <h2>Recording daily care routines</h2>
      </header>
      <section>
        <h3>Keeping parents informed</h3>
        <img src={AppleJuiceIcon} alt="Apple juice" className="landing-icon" />
        <p>Help parents and caregivers stay up to date on daily routines like naps, snacks, lunches, and diaper changes, and provide them with a full picture of their child's day at school.</p>
      </section>
      <section>
        <h3>Children as individuals</h3>
        <img src={PencilIcon} alt="Pencil" className="landing-icon" />
        <p>Tracking daily child care routines and providing thorough documentation ensures teachers are focused on caring for the needs of every individual student.</p>
      </section>
      <section>
        <h3>Travel back in time</h3>
        <img src={ClockIcon} alt="Clock" className="landing-icon" />
        <p>Go back in each student's history to discover trends in student behavior and habits. Based on teacher records, mark milestones like losing their first tooth or making a new friend!</p>
      </section>
      <Register />
      <div className="icon-credit">Icons made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a>, <a href="https://www.flaticon.com/authors/mynamepong" title="mynamepong">mynamepong</a>, <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a>, and <a href="https://www.flaticon.com/authors/creaticca-creative-agency" title="Creaticca Creative Agency">Creaticca Creative Agency</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </>
    )
  }
};

export default LandingPage;