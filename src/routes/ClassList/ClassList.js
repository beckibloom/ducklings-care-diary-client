import React from 'react';
import {Link} from 'react-router-dom';
import './ClassList.css';
import Student from '../../components/Student/Student';
import DiaryContext from '../../DiaryContext';

class ClassList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
    }
  }

  static contextType = DiaryContext;

  setStudents = (students) => {
    this.setState({
      students: students,
    })
  };

  componentDidMount() {
    const studentsOfTeacher = this.context.students.filter(student => student.teacher_id === parseInt(this.props.match.params.teacherId))
    this.setStudents(studentsOfTeacher);
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>Class list</h1>
        </header>
        <section>
          <ul className="class-list">
            {this.state.students.map(student =>
              <Student 
                key={student.id}
                firstname={student.student_first}
                lastname={student.student_last}
                studentId={student.id}
              />
            )}
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