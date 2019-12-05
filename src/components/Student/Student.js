import React from 'react';

class Student extends React.Component {
  render() {
    return (
      <li>
        <div className="student">
          <ul>
            <li className="name">{this.props.firstname} {this.props.lastname}</li>
            <li>
              <button className="edit">Edit Profile</button>
            </li>
          </ul>
          <ul>
            <li className="student-option">
              <button>Comment</button>
            </li>
            <li className="student-option">
              <button>Meal</button>
            </li>
            <li className="student-option">
              <button>Nap</button>
            </li>
            <li className="student-option">
              <button>Bathroom</button>
            </li>
            <li className="student-option">
              <button>For next time</button>
            </li>
          </ul>
        </div>
      </li>
    )
  }
}

export default Student;