import React from 'react';
import './AddNote.css';

class AddNote extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  }
  
  render() {
    return (
      <>
      <header>
        <h1>Add Note</h1>
      </header>
      <section>
        <form id="add-note">
          <div className="form-section comment">
            <label htmlFor="comment">Today's notes</label>
            <textarea name="comment" rows="5"></textarea>
          </div>

          <div className="form-section meal">
            Meal
            <div className="radio-row">
              <label htmlFor="am-snack">AM Snack</label>
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

            <div className="radio-row">
              <label htmlFor="lunch">Lunch</label>
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

            <div className="radio-row">
              <label htmlFor="pm-snack">PM Snack</label>
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

            <div className="radio-row">
              <label htmlFor="ac-snack">AfterCare Snack</label>
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

          <div className="form-section next-time">
            <label htmlFor="next-time">Notes for next time</label>
            <textarea name="next-time" rows="5"></textarea>
          </div>

          <button type="submit">Submit note</button>
          <button onClick={this.goBack}>Cancel</button>
        </form>
      </section>
    </>
    )
  }
}

export default AddNote;