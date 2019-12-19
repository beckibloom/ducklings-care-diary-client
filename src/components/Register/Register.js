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
      password: '',
      type: null,
      error: null,
    }
  }

  static contextType = DiaryContext;

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
    };

    UsersApiService.postUser(newUser)
      .then(this.setState({
          error: null
        }))
      .then(this.props.history.push(`/login`))
      .catch(this.context.setError);
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
        <p className="error">{this.state.error}</p>
      </section>
    )
  }
}

export default withRouter(Register);