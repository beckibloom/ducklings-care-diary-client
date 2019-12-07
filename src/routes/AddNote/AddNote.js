import React from 'react';
import './AddNote.css';
import DiaryContext from '../../DiaryContext';

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      error: '',
    }
  }

  static contextType = DiaryContext;

  validateFields = () => {
    if (this.state.note.length === 0) {
      this.setState({
        error: `You can't submit an empty note!`
      })
      return false;
    } else {
      this.setState({
        error: ''
      })
      return true;
    }
  }

  createId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let readyToSubmit = this.validateFields();
    if (readyToSubmit === true) {
      const newNote = {
        id: this.createId(),
        student_id: this.props.match.params.studentId,
        date: new Date().toDateString(),
        comment: this.state.note,
      }
      this.context.addNewNote(newNote);
      const teacherId = this.context.teacherId;
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

  goBack = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  }
  
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
    )
  }
}

export default AddNote;