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

  renderStudents = () => {
    let students = this.state.students;
    students.map(student => 
       <Student name={student.name} key={student.id} studentId={student.id} />
    )
  }

  componentDidMount() {
    this.setState({
      students: this.context.students
    })

    // if (this.context.users === []) {
    //   let setStore = new Promise((resolve, reject) => this.context.setStore())

    //   setStore.then(res => {
    //       this.setState({
    //         students: this.context.students
    //       })
    //     })
    // }
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>Class list</h1>
        </header>
        <section>
          <ul className="class-list">
            {/* {this.renderStudents()} */}
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