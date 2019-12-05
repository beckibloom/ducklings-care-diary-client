import React from 'react';
import '../AddNote.css';

class MealNote extends React.Component {
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

          <button type="submit">Submit note</button>
          <button onClick={this.goBack}>Cancel</button>
        </form>
      </section>
    </div>
    )
  }
}

export default MealNote;