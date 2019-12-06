import React from 'react';
import {Link} from 'react-router-dom';
import './StudentDiary.css';
import DiaryNote from '../../components/DiaryNote/DiaryNote';
import DiaryContext from '../../DiaryContext';

class StudentDiary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentNotes: [],
    }
  }
  static contextType = DiaryContext;

  renderReturnButton = () => {
    const classId = 1;
    const path = `/class/${classId}`;
    return (
    <Link to={path}>
      <button>Return to class list</button>
    </Link>
    )
  }

  renderDiaryNotes = () => {
    this.state.studentNotes.map(note => <DiaryNote note={note} />)
  }

  componentDidMount() {
    const notes = this.context.notes;
    const notesForStudent = notes.filter(note => note.id === parseInt(this.props.match.params.studentId));
    this.setState({
      studentNotes: notesForStudent
    })
  }

  render() {
    return (
      <>
      <header>
        <h1>Student Diary</h1>
      </header>
      <div className="main-content">
        <section className="profile-detail">
          <h3>Lily Altgeld</h3>
          <p><span className="bold">Birth date:</span> 12/03/2017</p>
          <p><span className="bold">Notes:</span> Allergy to peanuts.</p>
          <p><span className="bold">Parent users:</span></p>
          <p>Ruth Dakin-Altgeld, ruth@altgeld.com, Mother</p>
          <p>Matilda Altgeld, matilda@altgeld.com, Mother</p>
          <button>Edit student profile</button>
          {this.renderReturnButton()}
        </section>
        <section className="diary">
          <ul>
            {this.renderDiaryNotes()}
          </ul>
        </section>
      </div>
    </>
    )
  }
}

export default StudentDiary;