import React from 'react';
import './AddNote.css';
import DiaryContext from '../../DiaryContext';
import StudentsApiService from '../../services/students-api-service';
import DiaryApiService from '../../services/diary-api-service';
import UsersApiService from '../../services/users-api-service';

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      error: '',
    };
  }

  static contextType = DiaryContext;

  validateFields = () => {
    if (this.state.note.length === 0) {
      this.setState({
        error: `You can't submit an empty note!`
      });
      return false;
    } else {
      this.setState({
        error: ''
      });
      return true;
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let studentId;
    if (this.props.match) {
      studentId = this.props.match.params.studentId;
    };
    let readyToSubmit = this.validateFields();
    if (readyToSubmit === true) {
      const newNote = {
        student_id: studentId,
        date: new Date().toDateString(),
        comment: this.state.note,
      };

      DiaryApiService.postNote(newNote)
        .then(res => this.props.history.push(`/class/${this.context.teacherId}`))
        .catch(err => this.context.setError(err));   
    };
  };

  updateState = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({
      [key]: value
    });
  };

  goBack = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };

  componentDidMount() {
    if (!this.props.match) {
      return;
    };
    const studentId = this.props.match.params.studentId;
    StudentsApiService.getStudentById(studentId)
      .then(student => {
        UsersApiService.getUserData((resJson) => {
          resJson
            .then(resJson => {
              if (resJson.type === 'parent') {
                this.context.setAdminStatus(resJson.type);
                StudentsApiService.getStudentByParent()
                  .then(res => {
                    this.props.history.push(`/student/${res.id}`);
                    return;
                  })
              };
              if (resJson.type === 'teacher') {
                this.context.setAdminStatus(resJson.type);
                this.context.updateTeacherId(resJson.id);
                if (resJson.id !== student.teacher_id) {
                  this.props.history.push(`/class/${resJson.id}`);
                  return;
                };
              };
            });
        });
      })
      .catch(err => this.context.setError(err))
  };
  
  render() {
    return (
      <div>
      <header>
        <h1>Add Note</h1>
      </header>
      <section>
        <form id="add-note" onSubmit={this.handleSubmit}>
          <div className="form-section note">
            <label htmlFor="note">Today's notes</label>
            <textarea name="note" rows="5" id="note" value={this.state.note} onChange={this.updateState}></textarea>
          </div>
          <button type="submit">Submit note</button>
          <button onClick={this.goBack}>Cancel</button>
        </form>
        <p className="error">{this.state.error}</p>
      </section>
    </div>
    );
  };
};

export default AddNote;