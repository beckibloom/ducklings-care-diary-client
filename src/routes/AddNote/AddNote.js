import React from 'react';
import './AddNote.css';

class AddNote extends React.Component {
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
        <form id="add-note">
          <div className="form-section comment">
            <label htmlFor="comment">Today's notes</label>
            <textarea name="comment" rows="5"></textarea>
          </div>
          <button type="submit">Submit note</button>
          <button onClick={this.goBack}>Cancel</button>
        </form>
      </section>
    </div>
    )
  }
}

export default AddNote;