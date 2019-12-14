import React from 'react';

class DiaryNote extends React.Component {
  static defaultProps = {
    note: {
      comment: '',
      date: '',
    }
  }

  renderDate = () => {
    let date = new Date(this.props.note.date);
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
  }

  render() {
    return (
      <li className="note">
        <div className="comment">
          <h3>{this.renderDate()}</h3>
          <span className="bold">Today's notes:</span> {this.props.note.comment}
        </div>
      </li>
    )
  }
}

export default DiaryNote;