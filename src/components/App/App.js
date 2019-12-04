import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import DiaryContext from '../../DiaryContext';

import Nav from '../Nav/Nav';
import LandingPage from '../../routes/LandingPage/LandingPage';
import Login from '../../routes/Login/Login';
import Footer from '../Footer/Footer';

import Register from '../../components/Register/Register'

import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import AuthError from '../../routes/AuthError/AuthError';
import ClassList from '../../routes/ClassList/ClassList';
import AddStudent from '../../routes/AddStudent/AddStudent';
import StudentDiary from '../../routes/StudentDiary/StudentDiary';
import AddNote from '../../routes/AddNote/AddNote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: true,
    };
  };

  toggleAdmin = (status) => {
    this.setState({
      admin: status,
    })
  }

  render() {
    const contextValue = {
      admin: this.state.admin,
      setAdmin: this.setAdmin,
    }

    return (
      <DiaryContext.Provider value={contextValue}>
      <main className='App'>
        <Nav />
          <Switch>
            <Route 
              exact 
              path='/' 
              component={LandingPage} 
            />
            <PublicOnlyRoute 
              exact 
              path='/login' 
              component={Login} 
            />
            <Route 
              exact 
              path='/error' 
              component={AuthError} 
            />
            <PublicOnlyRoute
              exact
              path='/register'
              component={Register}
            />
            <PrivateRoute 
              exact
              path='/class/:classId'
              component={ClassList}
            />
            <PrivateRoute
              exact
              path='/addstudent'
              component={AddStudent}
            />
            <PrivateRoute
              exact
              path='/student/:studentId'
              component={StudentDiary}
            />
            <PrivateRoute
              exact
              path='/student/:studentId/addnote'
              component={AddNote}
            />
          </Switch>
        <Footer />
      </main>
      </DiaryContext.Provider>
    );
  }
}

export default App;