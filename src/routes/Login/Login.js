import React from 'react';
import {Link} from 'react-router-dom';
import DiaryContext from '../../DiaryContext';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null,
      username_error: null,
      password_error: null,
    }
  }

  static contextType = DiaryContext;

  validateUserData = () => {
    if (this.state.username === null) {
      this.setState({
        username_error: 'Username may not be left blank.'
      });
    } else {
      this.setState({
        username_error: null
      });
    }

    if (this.state.password === null) {
      this.setState({
        password_error: 'Password may not be left blank.'
      });
    } else {
      this.setState({
        password_error: null
      });
    }

    let foundUser = this.context.users.find(user => (user.username).toLowerCase() === (this.state.username).toLowerCase())
    if (!foundUser) {
      this.setState({
        error: 'Incorrect username or password usernotfound'
      });
      console.log({foundUser})
      return false;
    }

    if (foundUser.password !== this.state.password) {
      this.setState({
        error: 'Incorrect username or password passwordnotmatching'
      });
      console.log({foundUser}, this.state.password)
      return false;
    }

    if (foundUser.password === this.state.password) {
      this.setState({
        error: null,
        username_error: null,
        password_error: null,
        user_type: foundUser.type,
      });
      this.context.setAdminStatus(foundUser.type);

      if (foundUser.type === 'parent') {
        const parentEmail = foundUser.username;
        this.context.updateParentEmail(parentEmail);
        const student = this.context.students.find(student => student.parent_email === parentEmail)
        this.props.history.push(`/student/${student.id}`)
        this.context.filterNotesByStudent(student.id);
        return false;
      }
      return true;
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const isUserValid = this.validateUserData();
    if (isUserValid === true) {
      const currentUser = this.context.users.find(user => user.username.toLowerCase() === this.state.username.toLowerCase());
      const teacherId = currentUser.id;
      this.context.updateTeacherId(teacherId);
      this.props.history.push(`/class/${teacherId}`)
    }
  }

  updateState = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({
      [key]: value
    })
  }

  componentDidMount() {
    if (this.context.users === []) {
      this.context.setStore();
    }
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>Ducklings Care Diary</h1>
          <h2>Log in</h2>
        </header>
        <section>
          <form className='signup-form' onSubmit={this.handleSubmit} >
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' value={this.state.username} onChange={this.updateState} />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' value={this.state.password} onChange={this.updateState} />
              </div>
              <button type='submit'>Sign In</button>
              <p className="error">{this.state.error}</p>
              <p className="error">{this.state.username_error}</p>
              <p className="error">{this.state.password_error}</p>

              <div>
                Don't have a diary yet? <Link to='/register'>Sign up now.</Link>
              </div>
          </form>
        </section>
      </>
    )
  }
}

export default Login;