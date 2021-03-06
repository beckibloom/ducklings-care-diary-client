import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DiaryContext from '../../DiaryContext';
import Nav from '../Nav/Nav';
import LandingPage from '../../routes/LandingPage/LandingPage';
import Login from '../../routes/Login/Login';
import Footer from '../Footer/Footer';
import AuthError from '../../routes/AuthError/AuthError';
import ClassList from '../../routes/ClassList/ClassList';
import AddStudent from '../../routes/AddStudent/AddStudent';
import StudentDiary from '../../routes/StudentDiary/StudentDiary';
import Register from '../../components/Register/Register';
import AddNote from '../../routes/AddNote/AddNote';
import EditStudent from '../../routes/EditStudent/EditStudent';
import StudentError from '../../routes/StudentError/StudentError';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
      teacherId: null,
      notes: [],
      students: [],
    };
  };

  updateTeacherId = (id) => {
    this.setState({
      teacherId: id,
    });
  };

  updateParentEmail = (email) => {
    this.setState({
      parentEmail: email,
    });
  };

  addUserToContext = (user) => {
    let users = this.state.users;
    users.push(user);
    this.setState({
      users: users
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
    notes.push(newNote);
    this.setState({
      notes: notes
    });
  };

  setAdminStatus = (status) => {
    this.setState({
      admin: status,
    });
  };

  setStudents = (students) => {
    this.setState({
      students
    });
  };

  filterNotesByStudent = (studentId) => {
    const notes = this.state.notes;
    const notesForStudent = notes.filter(note => note.student_id == studentId);
    this.setState({
      studentNotes: notesForStudent,
    });
  };

  setError = (error) => {
    this.setState({error})
  };

  render() {
    const contextValue = {
      admin: this.state.admin,
      users: this.state.users,
      students: this.state.students,
      notes: this.state.notes,
      teacherId: this.state.teacherId,
      studentNotes: this.state.studentNotes,
      parentEmail: this.state.parentEmail,
      setAdminStatus: this.setAdminStatus,
      addStudentToContext: this.addStudentToContext,
      addUserToContext: this.addUserToContext,
      addNewNote: this.addNewNote,
      setStudents: this.setStudents,
      updateTeacherId: this.updateTeacherId,
      updateStudentInContext: this.updateStudentInContext,
      filterNotesByStudent: this.filterNotesByStudent,
      updateParentEmail: this.updateParentEmail,
      setError: this.setError,
    };

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
            <Route
              exact
              path='/student/0'
              component={StudentError}
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
  };
};

export default App;