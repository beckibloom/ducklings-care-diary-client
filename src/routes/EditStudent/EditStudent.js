import React from 'react';
import '../AddStudent/AddStudent.css';
import DiaryContext from '../../DiaryContext';

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
        student_first: document.getElementById('student_first').value,
        student_last: document.getElementById('student_last').value,
        birth_date: document.getElementById('birth_date').value,
        parent_email: document.getElementById('parent_email').value,
        id: this.state.id,
        teacher_id: this.state.teacher_id,
      };
      this.context.updateStudentInContext(studentToUpdate);
      this.props.history.push(`/class/${this.context.teacherId}`);
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

  getStudentObj = () => {
    // eslint-disable-next-line
    return this.context.students.find(student => student.id == this.props.match.params.studentId)
  }

  setValues = (student) => {
    document.getElementById('student_first').value = student.student_first;
    document.getElementById('student_last').value = student.student_last;
    document.getElementById('birth_date').value = student.birth_date;
    document.getElementById('parent_email').value = student.parent_email;

    this.setState({
      student_first: student.student_first,
      student_last: student.student_last,
      birth_date: student.birth_date,
      parent_email: student.parent_email,
    })
  }

  componentDidMount() {
    const student = this.getStudentObj();
    if (!student) { return }
    this.setValues(student);
    if (this.props.match.params.studentId) {
      this.setState({
        studentId: this.props.match.params.studentId,
      })
    }
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