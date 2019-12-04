import React from 'react';
import './AddStudent.css';

class AddStudent extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <>
      <header>
        <h1>New Student</h1>
      </header>
      <section>
        <form id="add-student">
          <div className="form-section">
            <label htmlFor="first-name">Student details</label>
            <input type="text" name="first-name" placeholder="First Name" required />
            <input type="text" name="last-name" placeholder="Last Name" required /> 
            <input type="text" name="birth-date" placeholder="Birth date, mm/dd/yyyy" required />
          </div>
          <div className="form-section">
            <label htmlFor="form-section">Student note</label>
            <textarea name="health-note" rows="5"   required></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="parent-1-first-name">Parent details (required)</label>
            <input type="text" name="parent-1-first-name" placeholder="First Name" required />
            <input type="text" name="parent-1-last-name" placeholder="Last Name" required /> 
            <input type="text" name="parent-1-relationship" placeholder="Relationship" required /> 
            <input type="text" name="parent-1-email" placeholder="E-mail Address" required />
          </div>

          <div className="form-section">
            <label htmlFor="parent-2-first-name">Additional parent details (optional)</label>
            <input type="text" name="parent-2-first-name" placeholder="First Name" required />
            <input type="text" name="parent-2-last-name" placeholder="Last Name" required /> 
            <input type="text" name="parent-2-relationship" placeholder="Relationship" required /> 
            <input type="text" name="parent-2-email" placeholder="E-mail Address" required />
          </div>

          <button type="submit">Add Student</button>
          <button onClick={this.goBack}>Go back</button>
        </form>
      </section>
    </>
    )
  }
}

export default AddStudent;