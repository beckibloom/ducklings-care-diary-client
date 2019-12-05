import React from 'react';
import '../AddNote.css';

class NextTimeNote extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  }
  
  render() {
    return (
      <div>
      <header>
        <h1>Add Note</h1>
      </header>
      <section>
        <form id="add-note">
          <div className="form-section next-time">
            <label htmlFor="next-time">Notes for next time</label>
            <textarea name="next-time" rows="5"></textarea>
          </div>
          <button type="submit">Submit note</button>
          <button onClick={this.goBack}>Cancel</button>
        </form>
      </section>
    </div>
    )
  }
}

export default NextTimeNote;