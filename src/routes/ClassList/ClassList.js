import React from 'react';
import {Link} from 'react-router-dom';
import './ClassList.css';
import Student from '../../components/Student/Student';
import DiaryContext from '../../DiaryContext';
import StudentsApiService from '../../services/students-api-service';
import UsersApiService from '../../services/users-api-service';
import AddUser from '../../images/add-user.png';

class ClassList extends React.Component {
  static contextType = DiaryContext;

  renderStudents = (students) => {
    if (!this.context.students) {
      return;
    } else {
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
    }
  };

  componentDidMount() {
    let teacherId;
    if (this.props.match) {
      teacherId = this.props.match.params.teacherId
    };
    StudentsApiService.getStudentsByTeacher(teacherId)
      .then(studentsOfTeacher => {
        this.context.setStudents(studentsOfTeacher);
      })
      .catch(err => this.context.setError(err));

    UsersApiService.getUserData((resJson) => {
      resJson
        .then(resJson => {
          if (resJson.type === 'parent') {
            this.context.setAdminStatus(resJson.type);
            StudentsApiService.getStudentByParent()
              .then(res => {
                this.props.history.push(`/student/${res.id}`);
                return;
              });
          };
          if (resJson.type === 'teacher') {
            this.context.setAdminStatus(resJson.type);
            this.context.updateTeacherId(resJson.id);
            if (resJson.id !== teacherId) {
              this.props.history.push(`/class/${resJson.id}`);
              return;
            };
          };
        });
      });
  };

  render() {
    return (
      <>
        <header role="banner">
          <h1>Class list</h1>
        </header>
        <section>
          <ul className="class-list">
            <li className="student-row">
              <Link to="/addstudent">
                <button className="add-student">
                  <img src={AddUser} className="add-user" alt="Add student icon" />  Add student
                </button>
              </Link>
            </li>
            {this.renderStudents(this.context.students)}
          </ul>
        </section>
      </>
    );
  };
};

export default ClassList;