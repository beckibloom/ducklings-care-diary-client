import React from 'react';
import {Link} from 'react-router-dom';
import DiaryContext from '../../DiaryContext';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import UsersApiService from '../../services/users-api-service';
import StudentsApiService from '../../services/students-api-service';
import './Login.css';

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

    return true;
  }

  handleSubmit = e => {
    e.preventDefault();
    const isUserDataValid = this.validateUserData();
    if (isUserDataValid === true) {
      const credentials = {
        username: this.state.username,
        password: this.state.password
      }

      AuthApiService.postLogin(credentials)
        .then(res =>
          TokenService.saveAuthToken(res.authToken))
        .then(res =>
          UsersApiService.getUserData((resJson) => {
            resJson
              .then(resJson => {
                if (resJson.type === 'parent') {
                  this.context.setAdminStatus(resJson.type)
                  StudentsApiService.getStudentByParent()
                    .then(res => {
                      if (res === null) {
                        console.log('No student linked to this parent')
                      } else {
                        this.props.history.push(`/student/${res.id}`)
                      }
                    })
                }
                if (resJson.type === 'teacher') {
                  this.context.setAdminStatus(resJson.type)
                  this.context.updateTeacherId(resJson.id)
                  this.props.history.push(`/class/${resJson.id}`)
                }
              })
              .catch(err => this.context.setError(err));
          }))
        .catch(err => this.context.setError(err));
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
                <input type="text" name='username' id='username' value={this.state.username} onChange={this.updateState} placeholder="Username" />
              </div>
              <div>
                <input type="password" name='password' id='password' value={this.state.password} onChange={this.updateState} placeholder="Password" />
              </div>
              <button type='submit'>Sign In</button>
              <p className="error">{this.state.error}</p>
              <p className="error">{this.state.username_error}</p>
              <p className="error">{this.state.password_error}</p>

              <div>
                Don't have a diary yet? 
                <p><Link to='/register'>Sign up now.</Link></p>
              </div>
          </form>
        </section>
      </>
    )
  }
}

export default Login;