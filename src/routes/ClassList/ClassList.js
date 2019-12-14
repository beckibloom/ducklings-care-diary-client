import React from 'react';
import {Link} from 'react-router-dom';
import './ClassList.css';
import Student from '../../components/Student/Student';
import DiaryContext from '../../DiaryContext';
import StudentsApiService from '../../services/students-api-service';
import UsersApiService from '../../services/users-api-service';

class ClassList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
    }
  }

  static contextType = DiaryContext;

  renderStudents = (students) => {
    return (
      students.map(student =>
        <Student 
          key={student.id}
          firstname={student.student_first}
          lastname={student.student_last}
          studentId={student.id}
        />
      )
    )
  };

  componentDidMount() {
    StudentsApiService.getStudentsByTeacher(this.props.match.params.teacherId)
      .then(studentsOfTeacher => {
        this.setState({
          students: studentsOfTeacher,
        })
      })
      .catch(err => this.context.setError(err))

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
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>Class list</h1>
        </header>
        <section>
          <ul className="class-list">
            <li>
              <Link to="/addstudent">Add new student</Link>
            </li>
            {this.renderStudents(this.state.students)}
          </ul>
        </section>
      </>
    )
  }
}

export default ClassList;