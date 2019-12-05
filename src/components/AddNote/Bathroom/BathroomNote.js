import React from 'react';
import '../AddNote.css';

class BathroomNote extends React.Component {
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
          <div className="form-section">
            Bathroom
            <div className="radio-row">
              <input type="text" placeholder="00:00 AM"/>
              <input type="checkbox" name="bathroom-wet" value="w"/>
              <label htmlFor="bathroom-dry">Wet</label>
              <input type="checkbox" name="bathroom-dry" value="d"/>
              <label htmlFor="bathroom-soiled">Dry</label>
              <input type="checkbox" name="bathroom-soiled" value="BM"/>
              <label htmlFor="bathroom-soiled">Soiled</label>
              <input type="checkbox" name="bathroom-da" value="da"/>
              <label htmlFor="bathroom-da">Diarrhea</label><input type="checkbox" name="bathroom-o" value="o"/>
              <label htmlFor="bathroom-o">Ointment applied</label>
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

export default BathroomNote;