import React from 'react';

class DiaryNote extends React.Component {
  render() {
    return (
      <li className="note">
        <h3>{this.props.note.date}</h3>
        <div className="comment">
          <span className="bold">Today's notes:</span> {this.props.note.comment}
        </div>
      </li>
    )
  }
}

export default DiaryNote;