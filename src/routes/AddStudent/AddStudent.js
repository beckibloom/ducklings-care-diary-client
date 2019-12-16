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
      this.context.addStudentToContext(student);
      this.props.history.push(`/class/${this.context.teacherId}`);
    };
  };

  validateBirthDate = (input) => {
    let dateformat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if(input.match(dateformat)) {
      document.addstudent.birthdate.focus();
      let operator1 = input.split('/');
      let operator2 = input.split('-');
      let lopera1 = operator1.length;
      let lopera2 = operator2.length;
      let pdate;
      if (lopera1 > 1) {
        pdate = input.split('/');
      } else if (lopera2 > 1) {
        pdate = input.split('-');
      }
      let dd = parseInt(pdate[0]);
      let mm  = parseInt(pdate[1]);
      let yy = parseInt(pdate[2]);
      let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
      if (mm===1 || mm>2) {
        if (dd>ListofDays[mm-1]) {
          this.setState({
            dateError: 'Expected birth date format is mm/dd/yy (day number does not exist)'
          });
        return false;
        }
      }
      if (mm===2) {
        let lyear = false;
        if ( (!(yy % 4) && yy % 100) || !(yy % 400)) {
          lyear = true;
        }
        if ((lyear===false) && (dd>=29)) {
          this.setState({
            dateError: 'Expected birth date format is mm/dd/yy (not a leap year and dd>=29)'
          });
          return false;
        }
        if ((lyear===true) && (dd>29)) {
          this.setState({
            dateError: 'Expected birth date format is mm/dd/yy (leap year && dd>29)'
          });
          return false;
        }
      }
    } else {
      this.setState({
        dateError: 'Expected birth date format is mm/dd/yy (doesnt pass regex)'
      });  
      document.addstudent.birthdate.focus();
      return false;
    }
    return true;
  }

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

    if (this.validateBirthDate(this.state.birth_date) === false) {
      return false;
    } else {
      this.setState({
        dateError: ''
      });
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
        <form id="add-student" onSubmit={this.handleSubmit} name="addstudent">
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
              name="birthdate" 
              id="birth_date"
              placeholder="Birth date, mm/dd/yy" 
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
          <p className="error">{this.state.error}</p>
          <p className="error">{this.state.dateError}</p>
          <p className="error">{this.state.emailError}</p>
        </form>
      </section>
    </>
    )
  }
}

export default AddStudent;