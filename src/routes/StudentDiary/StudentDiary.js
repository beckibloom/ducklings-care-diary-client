import React from 'react';
import {Link} from 'react-router-dom';
import './StudentDiary.css';

class StudentDiary extends React.Component {
  renderReturnButton = () => {
    const classId = 1;
    const path = `/class/${classId}`;
    return (
    <Link to={path}>
      <button>Return to class list</button>
    </Link>
    )
  }

  render() {
    return (
      <>
      <header>
        <h1>Student Diary</h1>
      </header>
      <div className="main-content">
        <section className="profile-detail">
          <h3>Lily Altgeld</h3>
          <p><span className="bold">Birth date:</span> 12/03/2017</p>
          <p><span className="bold">Notes:</span> Allergy to peanuts.</p>
          <p><span className="bold">Parent users:</span></p>
          <p>Ruth Dakin-Altgeld, ruth@altgeld.com, Mother</p>
          <p>Matilda Altgeld, matilda@altgeld.com, Mother</p>
          <button>Edit student profile</button>
          {this.renderReturnButton()}
        </section>
        <section className="diary">
          <ul>
            <li className="note">
              <h3>Tuesday, December 3, 2019</h3>
              <div className="comment">
                <span className="bold">Today's notes:</span> Lily had fun building with blocks today!
              </div>
              <div className="meals">
                <ul className="meals">
                  <li><span className="bold">Meals</span></li>
                  <li>(All, Most, Some, Try, or None)</li>
                  <li><span className="bold">AM Snack:</span> Try</li>
                  <li><span className="bold">Lunch:</span> Most</li>
                  <li><span className="bold">PM Snack:</span> Some</li>
                  <li><span className="bold">AC Snack:</span> All</li>
                </ul>
              </div>
              <div className="nap">
                <span className="bold">Nap time:</span> 1.5 hours
              </div>
              <div className="bathroom">
                <ul className="bathroom">
                  <li><span className="bold">Bathroom</span></li>
                  <li>00:00, Wet</li>
                  <li>00:00, Wet</li>
                  <li>00:00, Dry, Ointment Applied</li>
                  <li>00:00, Soiled</li>
                  <li>00:00, Diarrhea</li>
                  <li>00:00, Diarrhea</li>
                </ul>
              </div>
              <div className="next-time">
                <span className="bold">Notes for next time:</span> Bring more diapers
              </div>
            </li>
            <li className="note">
              <h3>Monday, December 2, 2019</h3>
              <div className="comment">
                <span className="bold">Today's notes:</span> Lily had a hard time in dance today.
              </div>
              <div className="meals">
                <ul className="meals">
                  <li><span className="bold">Meals</span></li>
                  <li>(All, Most, Some, Try, or None)</li>
                  <li><span className="bold">AM Snack:</span> Try</li>
                  <li><span className="bold">Lunch:</span> Most</li>
                  <li><span className="bold">PM Snack:</span> Some</li>
                  <li><span className="bold">AC Snack:</span> All</li>
                </ul>
              </div>
              <div className="nap">
                <span className="bold">Nap time:</span> 1 hour
              </div>
              <div className="bathroom">
                <ul className="bathroom">
                  <li><span className="bold">Bathroom</span></li>
                  <li>00:00, Wet</li>
                  <li>00:00, Wet</li>
                  <li>00:00, Dry, Ointment Applied</li>
                  <li>00:00, Soiled</li>
                  <li>00:00, Diarrhea</li>
                  <li>00:00, Diarrhea</li>
                </ul>
              </div>
              <div className="next-time">
                <span className="bold">Notes for next time:</span> None
              </div>
            </li>
            <li className="note">
              <h3>Tuesday, November 26, 2019</h3>
              <div className="comment">
                <span className="bold">Today's notes:</span> Lily made a new friend today
              </div>
              <div className="meals">
                <ul className="meals">
                  <li><span className="bold">Meals</span></li>
                  <li>(All, Most, Some, Try, or None)</li>
                  <li><span className="bold">AM Snack:</span> Try</li>
                  <li><span className="bold">Lunch:</span> Most</li>
                  <li><span className="bold">PM Snack:</span> Some</li>
                  <li><span className="bold">AC Snack:</span> All</li>
                </ul>
              </div>
              <div className="nap">
                <span className="bold">Nap time:</span> 2 hours
              </div>
              <div className="bathroom">
                <ul className="bathroom">
                  <li><span className="bold">Bathroom</span></li>
                  <li>00:00, Wet</li>
                  <li>00:00, Wet</li>
                  <li>00:00, Dry, Ointment Applied</li>
                  <li>00:00, Soiled</li>
                  <li>00:00, Diarrhea</li>
                  <li>00:00, Diarrhea</li>
                </ul>
              </div>
              <div className="next-time">
                <span className="bold">Notes for next time:</span> Happy Thanksgiving!
              </div>
            </li>
            <li className="note">
              <h3>Monday, November 25, 2019</h3>
              <div className="comment">
                <span className="bold">Today's notes:</span> After drop off Lily was upset so she spent some time cuddling her teddy bear to help her feel better.
              </div>
              <div className="meals">
                <ul className="meals">
                  <li><span className="bold">Meals</span></li>
                  <li>(All, Most, Some, Try, or None)</li>
                  <li><span className="bold">AM Snack:</span> Try</li>
                  <li><span className="bold">Lunch:</span> Most</li>
                  <li><span className="bold">PM Snack:</span> Some</li>
                  <li><span className="bold">AC Snack:</span> All</li>
                </ul>
              </div>
              <div className="nap">
                <span className="bold">Nap time:</span> .5 hours
              </div>
              <div className="bathroom">
                <ul className="bathroom">
                  <li><span className="bold">Bathroom</span></li>
                  <li>00:00, Wet</li>
                  <li>00:00, Wet</li>
                  <li>00:00, Dry, Ointment Applied</li>
                  <li>00:00, Soiled</li>
                  <li>00:00, Diarrhea</li>
                  <li>00:00, Diarrhea</li>
                </ul>
              </div>
              <div className="next-time">
                <span className="bold">Notes for next time:</span> Please bring a warm hat for playing outside
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
    )
  }
}

export default StudentDiary;