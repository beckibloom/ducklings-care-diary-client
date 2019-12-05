import React from 'react';
import ReactDOM from 'react-dom'; 
import {BrowserRouter} from 'react-router-dom';
import BathroomNote from './BathroomNote';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <BathroomNote />
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
