import React from 'react';
import {withRouter} from 'react-router-dom';
import DiaryContext from '../../DiaryContext';
import './Student.css';

class Student extends React.Component {
  static contextType = DiaryContext;

  filterNotes = (e) => {
    e.preventDefault();
    //get student notes
    const studentId = this.props.studentId;
    this.context.filterNotesByStudent(studentId);
    this.props.history.push(`/student/${studentId}`);
  }

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
      <li className="student-row">
        <div className="student">
          <ul>
            <li className="name">
              {this.props.firstname} {this.props.lastname}
            </li>
            <li className="student-buttons">
              <button onClick={this.editProfile}>Edit Profile</button>
              <button onClick={this.addNote}>Leave a Note</button>
              <button onClick={this.filterNotes}>View Student Diary</button>
            </li>
          </ul>
        </div>
      </li>
    )
  }
}

export default withRouter(Student);