import React from 'react';
import {withRouter} from 'react-router-dom';
import './Register.css';
import DiaryContext from '../../DiaryContext';
import UsersApiService from '../../services/users-api-service';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      username_error: null,
      password: '',
      password_error: null,
      type: null,
      error: null,
    }
  }

  static contextType = DiaryContext;

  validateUserData = () => {
    const upperLowerNumberSpecial = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/);

    if (this.state.username === null) {
      this.setState({
        username_error: 'Username may not be left blank.'
      });
      return false;
    } else {
      this.setState({
        username_error: null
      });
    }

    if (this.state.password === null) {
      this.setState({
        password_error: 'Password may not be left blank.'
      });
      return false;
    } else if (this.state.password.length < 8) {
      this.setState({
        password_error: 'Password must be at least 8 characters long.'
      });
      return false;
    } else if (this.state.password.length > 72) {
      this.setState({
        password_error:'Password must be less than 72 characters'
      });
      return false;
    } else if (this.state.password.charAt(0) === ' ' || this.state.password.charAt(this.state.password.length-1) === ' ') {
      this.setState({
        password_error:'Password must not include spaces'
      });
      return false;
    } else if (upperLowerNumberSpecial.test(this.state.password) === false) {
      this.setState({
        password_error:'Password must contain 1 of each: upper case, lower case, number and special character.'
      });
      return false;
    } else {
      this.setState({
        password_error: null
      });
    }

    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateUserData() === true) {
      const newUser = {
        username: this.state.username,
        password: this.state.password,
        type: this.state.type,
      };
  
      UsersApiService.postUser(newUser)
        .then(this.setState({
            error: null
          }))
        .then(this.props.history.push(`/login`))
        .catch(this.context.setError);
    }
  };

  updateUserType = (e) => {
    const value = e.target.value;
    this.setState({
      type: value
    });
  };

  updateState = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <section>
        <h3>Start your journey today</h3>
        <form className='signup-form' onSubmit={this.handleSubmit} >
            <div>
              <input type="text" name='username' id='username' placeholder="E-mail" value={this.state.username} onChange={this.updateState} />
            </div>
            <div>
              <input type="password" name='password' id='password' placeholder="Password" value={this.state.password} onChange={this.updateState} />
            </div>
            <div className="select-user-type">
              <div>
                <p>I am a...</p>
              </div>
              <select className="type-select" required id="type" onChange={this.updateState} value={this.state.type}>
                <option value={null}>(choose one)</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
              </select>
            </div>
            <button type='submit'>Sign Up</button>
        </form>
        <p className="error">{this.state.username_error}</p>
        <p className="error">{this.state.password_error}</p>
      </section>
    )
  }
}

export default withRouter(Register);