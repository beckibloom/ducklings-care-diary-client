import React from 'react';
import './AddStudent.css';
import DiaryContext from '../../DiaryContext';
import StudentsApiService from '../../services/students-api-service';
import UsersApiService from '../../services/users-api-service';

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student_first: '',
      student_last: '',
      birth_date: '',
      parent_email: '',
    }
  }

  static contextType = DiaryContext;

  handleSubmit = (e) => {
    e.preventDefault();
    let readyToSubmit = this.validateFields();
    const student = {
      student_first: this.state.student_first,
      student_last: this.state.student_last,
      birth_date: this.state.birth_date,
      parent_email: this.state.parent_email,
      teacher_id: this.context.teacherId,
    };
    if (readyToSubmit === true) {
      StudentsApiService.addStudent(student);
      this.props.history.push(`/class/${this.context.teacherId}`);
    };
  };

  validateFields = () => {
    if (this.state.student_first.length === 0 || this.state.student_last.length === 0 || this.state.birth_date.length === 0 || this.state.parent_email.length === 0) {
      this.setState({
        error: 'First name, last name, or birth date may not be left blank.'
      })
      return false;
    } else {
      this.setState({
        error: '',
      })
    }

    if (this.state.birth_date.charAt(2) !== '/' || this.state.birth_date.charAt(5) !== '/' || this.state.birth_date.length !== 10) {
      this.setState({
        dateError: 'Expected birth date format is mm/dd/yyyy'
      });
      return false;
    } else {
      this.setState({
        dateError: ''
      })
    }

    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.parent_email)) {
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

  componentDidMount() {
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
          }
        })
    })
  }

  render() {
    return (
      <>
      <header>
        <h1>New Student</h1>
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
              value={this.state.student_first}
              onChange={this.updateState} />
            <input 
              type="text" 
              name="last-name"
              id="student_last" 
              placeholder="Last Name" 
              required
              value={this.state.student_last}
              onChange={this.updateState} /> 
            <input 
              type="text" 
              name="birth-date" 
              id="birth_date"
              placeholder="Birth date, mm/dd/yyyy" 
              required
              value={this.state.birth_date}
              onChange={this.updateState} />
            <input 
              type="text" 
              name="parent-1-email" 
              id="parent_email"
              placeholder="Parent e-mail Address" 
              required
              value={this.state.parent_email}
              onChange={this.updateState} />
          </div>


          <button type="submit">Add Student</button>
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

export default AddStudent;