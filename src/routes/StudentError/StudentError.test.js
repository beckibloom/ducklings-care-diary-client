import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import StudentError from "./StudentError";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <StudentError />
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});