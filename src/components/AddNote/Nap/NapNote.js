import React from 'react';
import '../AddNote.css';

class AddNote extends React.Component {
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
          <div className="form-section nap">
            <label htmlFor="nap">Nap Time</label>
            <div  className="radio-row">
              <input type="radio" name="am-snack" value="all"/>
              <label>All</label>
              <input type="radio" name="am-snack" value="most"/>
              <label>Most</label>
              <input type="radio" name="am-snack" value="some"/>
              <label>Some</label>
              <input type="radio" name="am-snack" value="try"/>
              <label>Try</label>
              <input type="radio" name="am-snack" value="none"/>
              <label>None</label>
            </div>
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