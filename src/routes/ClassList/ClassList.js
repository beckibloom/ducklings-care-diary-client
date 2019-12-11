import React from 'react';
import {Link} from 'react-router-dom';
import './ClassList.css';
import Student from '../../components/Student/Student';
import DiaryContext from '../../DiaryContext';
import StudentsApiService from '../../services/students-api-service';

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
      .then(res => {
        console.log('componentDidMount');
        console.log(res);
      })
      .catch(this.context.setError);
    
      // .then(studentsOfTeacher => {
      //   this.setState({
      //     students: studentsOfTeacher,
      //   })
      // })
      // .catch(err => this.context.setError(err))
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
          </ul>
        </section>
      </>
    )
  }
}

export default ClassList;