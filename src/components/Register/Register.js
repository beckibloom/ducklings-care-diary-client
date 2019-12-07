import React from 'react';
import {withRouter} from 'react-router-dom';
import './Register.css';
import DiaryContext from '../../DiaryContext';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      type: null,
      error: null,
    }
  }

  static contextType = DiaryContext;

  createId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.email === null || this.state.password === null || this.state.type === null) {
      this.setState({
        error: `Whoops, something's missing! Make sure you fill in all the fields above.`
      });
      return;
    }

    const newUser = {
      username: this.state.username,
      password: this.state.password,
      type: this.state.type,
      id: this.createId(),
    };
    this.setState({
      error: null
    });
    this.context.addUserToContext(newUser);
    this.props.history.push(`/login`);
  }

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
        <header>
            <h3>Start your journey today</h3>
        </header>
        <form className='signup-form' onSubmit={this.handleSubmit} >
            <div>
              <input type="text" name='username' id='username' placeholder="E-mail" onChange={this.updateState} />
            </div>
            <div>
              <input type="password" name='password' id='password' placeholder="Password" onChange={this.updateState} />
            </div>
            <div className="select-user-type">
              <div>
                <label htmlFor="user-type">I am a...</label>
              </div>
              <div>
              <label htmlFor="teacher">Teacher
                  <input type="radio" name="user-type" value="teacher" id="teacher" onChange={this.updateUserType} />
                </label>
              </div>
              <div>
              <label htmlFor="parent">Parent/Caregiver
                  <input type="radio" name="user-type" value="parent" onChange={this.updateUserType} />
                </label>
              </div>
            </div>
            <button type='submit'>Sign Up</button>
        </form>
        <p className="error">{this.state.error}</p>
      </section>
    )
  }
}

export default withRouter(Register);