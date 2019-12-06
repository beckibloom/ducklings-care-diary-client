import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Student extends React.Component {
  addNote = (e) => {
    e.preventDefault();
    const studentId = this.props.studentId;
    this.props.history.push(`/student/${studentId}/addnote`)
  };

  editProfile = (e) => {
    e.preventDefault();
    const studentId = this.props.studentId;
    this.props.history.push(`/student/${studentId}/edit`)
  };

  render() {
    return (
      <li>
        <div className="student">
          <ul>
            <li className="name">
              {this.props.firstname} {this.props.lastname}
            </li>
            <li>
              <button onClick={this.editProfile}>Edit Profile</button>
              <button onClick={this.addNote}>Leave a Note</button>
              <Link to={`/student/${this.props.studentId}`}>
                <button>View Student Diary</button>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    )
  }
}

export default withRouter(Student);