import React from 'react';
import ReactDOM from 'react-dom'; 
import {BrowserRouter} from 'react-router-dom';
import MealNote from './MealNote';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <MealNote />
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
