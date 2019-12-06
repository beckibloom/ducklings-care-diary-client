import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import DiaryContext from '../../DiaryContext';
import STORE from '../../store';

import Nav from '../Nav/Nav';
import LandingPage from '../../routes/LandingPage/LandingPage';
import Login from '../../routes/Login/Login';
import Footer from '../Footer/Footer';
import AuthError from '../../routes/AuthError/AuthError';
import ClassList from '../../routes/ClassList/ClassList';
import AddStudent from '../../routes/AddStudent/AddStudent';
import StudentDiary from '../../routes/StudentDiary/StudentDiary';
import Register from '../../components/Register/Register';

import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import AddNote from '../../routes/AddNote/AddNote';
import EditStudent from '../../routes/EditStudent/EditStudent';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
      teacherId: null,
    };
  };

  updateTeacherId = (id) => {
    this.setState({
      teacherId: id,
    })
  };

  addUserToContext = (user) => {
    let users = this.state.users;
    let newUsers = users.push(user);
    this.setState({
      users: newUsers
    });
  };

  addStudentToContext = (student) => {
    let students = this.state.students;
    students.push(student);
    this.setState({
      students: students
    });
  };

  updateStudentInContext = (student) => {
    let students = this.state.students;
    const index = students.findIndex(st => st.id === student.id);
    students.splice(index, 1);
    students.push(student);
    this.setState({
      students: students
    });
  };

  addNewNote = (newNote) => {
    let notes = this.state.notes;
    let noteToUpdate = notes.find(note => note.date === newNote.date)
    if (!noteToUpdate) {
      let newNotes = notes.push(newNote);
      this.setState({
        notes: newNotes
      });
      return;
    };

    let itemsToUpdate = Object.keys(newNote);
    for (let i=0; i < itemsToUpdate.length; i++) {
      noteToUpdate.itemsToUpdate[i] = newNote.itemsToUpdate[i]
    };

    //notes are stored in array with the most recent note at the end of the array
    //.pop() the last item in the array and .push the new object
    notes.pop();
    let newNotes = notes.push(noteToUpdate);
    this.setState({
      notes: newNotes
    });
  };

  setAdminStatus = (status) => {
    this.setState({
      admin: status,
    })
  };

  setStore = () => {
    const users = STORE.users;
    const students = STORE.students;
    const notes = STORE.notes;

    this.setState({
      users,
      students,
      notes,
    });
  };

  componentDidMount = () => {
    this.setStore();
  }

  render() {
    const contextValue = {
      admin: this.state.admin,
      users: this.state.users,
      students: this.state.students,
      notes: this.state.notes,
      teacherId: this.state.teacherId,
      setAdminStatus: this.setAdminStatus,
      addStudentToContext: this.addStudentToContext,
      addUserToContext: this.addUserToContext,
      addNewNote: this.addNewNote,
      setStore: this.setStore,
      updateTeacherId: this.updateTeacherId,
      updateStudentInContext: this.updateStudentInContext,
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
              path='/class/:teacherId'
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
            <PrivateRoute
              exact
              path='/student/:studentId/edit'
              component={EditStudent}
            />
          </Switch>
        <Footer />
      </main>
      </DiaryContext.Provider>
    );
  }
}

export default App;