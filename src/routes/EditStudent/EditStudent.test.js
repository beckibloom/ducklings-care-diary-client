import React from 'react';
import ReactDOM from 'react-dom'; 
import {BrowserRouter} from 'react-router-dom';
import EditStudent from './EditStudent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <EditStudent />
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
