import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Nav.css';
import DiaryContext from '../../DiaryContext';
import TokenService from '../../services/token-service';
import UsersApiService from '../../services/users-api-service';

class Nav extends React.Component {
  static contextType = DiaryContext;

  logOut = (e) => {
    e.preventDefault();
    this.context.setAdminStatus(false);
    TokenService.clearAuthToken();
    this.props.history.push('/')
  }

  renderLoginLogout = () => {
    if (TokenService.hasAuthToken() === false) {
      return (
      <Link to='/login'>
        <button>
          Log in to my diary
        </button>
      </Link>)
    } else if (this.context.admin === 'parent') {
      return (
        <button onClick={this.logOut}>
          Log out of my diary
        </button>
      )
      } else if (this.context.admin === 'teacher') {
        return (
          <div>
            <button onClick={this.logOut}>
              Log out of my diary
            </button>
            <Link to={`/class/${this.context.teacherId}`}>
              <button>Go to class list</button>
            </Link>
          </div>
        )
      }
  }

  componentDidMount() {
    UsersApiService.getUserData((resJson) => {
      resJson
        .then(resJson => {
          if(resJson.type === 'parent') {
            this.context.setAdminStatus(resJson.type)
          }
          if(resJson.type === 'teacher') {
            this.context.setAdminStatus(resJson.type)
            this.context.updateTeacherId(resJson.id)
          }
        })
        .catch(err => this.context.setError(err))
    })
  }

  render() {
    return (
      <nav role="navigation">
        <ul>
          <li>
            <Link to='/'>[logo placeholder]</Link>
          </li>
          <li>
            {this.renderLoginLogout()}
          </li>
        </ul>
      </nav>
      )
  }
}

export default withRouter(Nav);