import React from 'react';
import {withRouter} from 'react-router-dom';
import DiaryContext from '../../DiaryContext';
import DiaryApiService from '../../services/diary-api-service';
import './DiaryNote.css';

class DiaryNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
    }
  }

  static defaultProps = {
    note: {
      id: '',
      student_id: '',
      date: '',
      comment: '',
    },
  }

  static contextType = DiaryContext;

  renderDate = () => {
    let date = new Date(this.props.note.date);
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
  }

  deleteNote = (e) => {
    e.preventDefault();
    const studentId = this.props.note.student_id;
    const entryId = this.props.note.id;
    DiaryApiService.deleteEntry(studentId, entryId)
      .then(res => {
        this.setState({
          deleted: true,
        })
      })
      .catch(err => this.context.setError(err))
  }

  renderButtons = () => {
    if (this.context.admin === 'teacher') {
      return (
        <button className="delete" onClick={this.deleteNote}>Delete Note</button>
      )
    } 
  }

  renderEntry = () => {
    if (this.state.deleted === false) {
      return (
        <li className="note">
        <div className="comment">
          <h3>{this.renderDate()}</h3>
          <span className="bold">Today's notes:</span> {this.props.note.comment}
          {this.renderButtons()}
        </div>
        </li>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      this.renderEntry()
    )
  }
}

export default withRouter(DiaryNote);