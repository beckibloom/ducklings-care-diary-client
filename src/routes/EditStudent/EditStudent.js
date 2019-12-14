import React from 'react';
import '../AddStudent/AddStudent.css';
import DiaryContext from '../../DiaryContext';
import StudentsApiService from '../../services/students-api-service';
import UsersApiService from '../../services/users-api-service';

class EditStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student_first: '',
      student_last: '',
      birth_date: '',
      parent_email: '',
      id: null,
      teacher_id: null
    }
  }

  static contextType = DiaryContext;

  handleSubmit = (e) => {
    e.preventDefault();
    let readyToSubmit = this.validateFields();
    if (readyToSubmit === true) {
      const studentToUpdate = {
        id: this.state.id,
        teacher_id: this.state.teacher_id,
        student_first: document.getElementById('student_first').value,
        student_last: document.getElementById('student_last').value,
        birth_date: document.getElementById('birth_date').value,
        parent_email: document.getElementById('parent_email').value
      };
      StudentsApiService.putStudent(studentToUpdate)
        .then(this.props.history.push(`/class/${this.context.teacherId}`))
    };
  };

  validateFields = () => {
    if (document.getElementById('student_first').value === 0 || document.getElementById('student_last').value === 0 || document.getElementById('birth_date').value === 0 || document.getElementById('parent_email').value === 0) {
      this.setState({
        error: 'First name, last name, or birth date may not be left blank.'
      })
      return false;
    } else {
      this.setState({
        error: '',
      })
    }

    if (document.getElementById('birth_date').value.charAt(2) !== '/' || document.getElementById('birth_date').value.charAt(5) !== '/' || document.getElementById('birth_date').value.length !== 10) {
      this.setState({
        dateError: 'Expected birth date format is mm/dd/yyyy'
      });
      return false;
    } else {
      this.setState({
        dateError: ''
      })
    }

    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('parent_email').value)) {
      this.setState({
        emailError: ''
      })
      return true;
    } else {
      this.setState({
        emailError: 'Please enter a valid e-mail address.',
      });
      return false;
    }
  }

  updateState = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({
      [key]: value,
    });
  }

  goBack = () => {
    this.props.history.goBack();
  }

  setValues = (student) => {
    document.getElementById('student_first').value = student.student_first;
    document.getElementById('student_last').value = student.student_last;
    document.getElementById('birth_date').value = student.birth_date;
    document.getElementById('parent_email').value = student.parent_email;
  }

  componentDidMount() {
    if (!this.props.match) {
      return
    }
    const studentId = this.props.match.params.studentId;
    StudentsApiService.getStudentById(studentId)
      .then(studentObj => this.setState({
        student_first: studentObj.student_first,
        student_last: studentObj.student_last,
        birth_date: studentObj.birth_date,
        parent_email: studentObj.parent_email,
        id: studentObj.id,
        teacher_id: studentObj.teacher_id  
      }))
      .then(res => this.setValues(this.state))
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
                if (resJson.id !== this.state.teacher_id) {
                  this.props.history.push(`/class/${resJson.id}`)
                  return
                }
              }
            })
        })
      })
      .catch(err => this.context.setError(err))
  }

  render() {
    return (
      <>
      <header>
        <h1>Edit Student</h1>
      </header>
      <section>
        <form id="add-student" onSubmit={this.handleSubmit}>
          <div className="form-section">
            <label htmlFor="first-name">Student details</label>
            <input 
              type="text" 
              name="first-name" 
              id="student_first"
              placeholder="First Name" 
              required
              onChange={this.updateState} />
            <input 
              type="text" 
              name="last-name"
              id="student_last" 
              placeholder="Last Name" 
              required
              onChange={this.updateState} /> 
            <input 
              type="text" 
              name="birth-date" 
              id="birth_date"
              placeholder="Birth date, mm/dd/yyyy" 
              required
              onChange={this.updateState} />
            <input 
              type="text" 
              name="parent-1-email" 
              id="parent_email"
              placeholder="Parent e-mail Address" 
              required
              onChange={this.updateState} />
          </div>


          <button type="submit">Update Student</button>
          <button onClick={this.goBack}>Go back</button>
          <p>{this.state.error}</p>
          <p>{this.state.dateError}</p>
          <p>{this.state.emailError}</p>
        </form>
      </section>
    </>
    )
  }
}

export default EditStudent;