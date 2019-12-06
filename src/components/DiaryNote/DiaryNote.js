import React from 'react';

class DiaryNote extends React.Component {
  //get props.date and props.note

  render() {
    return (
      <li className="note">
        <h3>{this.props.date}</h3>
        <div className="comment">
          <span className="bold">Today's notes:</span> {this.props.note}
        </div>
      </li>
    )
  }
}

export default DiaryNote;