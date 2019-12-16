import React from 'react';
import {Link} from 'react-router-dom';
import './StudentDiary.css';
import DiaryNote from '../../components/DiaryNote/DiaryNote';
import DiaryContext from '../../DiaryContext';
import DiaryApiService from '../../services/diary-api-service';
import StudentsApiService from '../../services/students-api-service';
import UsersApiService from '../../services/users-api-service';

class StudentDiary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        id: '',
        teacher_id: '',
        student_first: '',
        student_last: '',
        birth_date: '',
        parent_email: '',
      },
      notes: [],
    }
  }
  static contextType = DiaryContext;

  deleteStudent = (e) => {
    let r = window.confirm('Are you sure you want to delete this student?');
    if (r === true) {
      e.preventDefault();
      StudentsApiService.deleteStudent(this.state.student.id)
        .then(res => {
          this.props.history.push(`/class/${this.state.student.teacher_id}`)
        })
        .catch(err => this.context.setError(err))  
    }
  }

  renderTeacherButtons = () => {
    if(this.context.admin === 'teacher') {
      const teacherId = this.context.teacherId;
      const path = `/class/${teacherId}`;
      return (
        <div className='teacher-buttons'>
          <button onClick={this.editProfile}>Edit student profile</button>
          <button onClick={this.deleteStudent}>Delete student</button>
          <Link to={`/student/${this.state.student.id}/addnote`}>
            <button>Add new note</button>
          </Link>
          <Link to={path}>
            <button>Return to class list</button>
          </Link>
        </div>
      )
    }
  }

  componentDidMount() {
    if (!this.props.match) {
      return
    }
    const studentId = this.props.match.params.studentId;
    StudentsApiService.getStudentById(studentId)
      .then(student => this.setState({student: student}))
      .then(res => {
        UsersApiService.getUserData((resJson) => {
          resJson
            .then(resJson => {
              if (resJson.type === 'parent') {
                this.context.setAdminStatus(resJson.type)
                StudentsApiService.getStudentByParent()
                  .then(res => {
                    this.props.history.push(`/student/${res.id}`)
                    return
                  })
              }
              if (resJson.type === 'teacher') {
                this.context.setAdminStatus(resJson.type)
                this.context.updateTeacherId(resJson.id)
                if (resJson.id !== this.state.student.teacher_id) {
                  this.props.history.push(`/class/${resJson.id}`)
                  return
                }
              }
            })
        })
      })
      .catch(err => this.context.setError(err))

    DiaryApiService.getNotesByStudentId(this.props.match.params.studentId)
      .then(notes => this.setState({notes: notes}))
      .catch(err => this.context.setError(err))
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
      <section className="main-content">
        <div className="profile-detail">
          <h3>{this.state.student.student_first} {this.state.student.student_last}</h3>
          <p><span className="bold">Birth date:</span> {this.state.student.birth_date}</p>
          <p><span className="bold">Parent user:</span> {this.state.student.parent_email}</p>
          {this.renderTeacherButtons()}
        </div>
        <div className="diary">
          <ul>
            {this.state.notes.slice(0).reverse().map(note => 
              <DiaryNote 
                key={note.id}
                note={note} />)}
          </ul>
        </div>
      </section>
    </>
    )
  }
}

export default StudentDiary;