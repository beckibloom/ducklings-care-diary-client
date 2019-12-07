import React from 'react';
import {Link} from 'react-router-dom';
import './StudentDiary.css';
import DiaryNote from '../../components/DiaryNote/DiaryNote';
import DiaryContext from '../../DiaryContext';

class StudentDiary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        student_first: '',
        student_last: '',
        birthdate: '',
        parent_email: '',
      },
    }
  }
  static contextType = DiaryContext;

  renderReturnButton = () => {
    if(this.context.admin === 'teacher') {
      const teacherId = this.context.teacherId;
      const path = `/class/${teacherId}`;
      return (
        <>
          <button onClick={this.editProfile}>Edit student profile</button>
          <Link to={path}>
            <button>Return to class list</button>
          </Link>
        </>
      )
    }
  }

  componentDidMount() {
    // eslint-disable-next-line
    const student = this.context.students.find(student => student.id == this.props.match.params.studentId)
    if (!student) { return }
    this.setState({
      student: student,
    })
  }

  editProfile = (e) => {
    e.preventDefault();
    const studentId = this.state.student.id;
    this.props.history.push(`/student/${studentId}/edit`)
  };

  render() {
    return (
      <>
      <header>
        <h1>Student Diary</h1>
      </header>
      <div className="main-content">
        <section className="profile-detail">
          <h3>{this.state.student.student_first} {this.state.student.student_last}</h3>
          <p><span className="bold">Birth date:</span> {this.state.student.birthdate}</p>
          <p><span className="bold">Parent user:</span>
          {this.state.student.parent_email}</p>
          {this.renderReturnButton()}
        </section>
        <section className="diary">
          <ul>
            {this.context.studentNotes.map(note => 
              <DiaryNote 
                key={note.id}
                note={note} />)}
          </ul>
        </section>
      </div>
    </>
    )
  }
}

export default StudentDiary;