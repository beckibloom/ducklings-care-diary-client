import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import ClassList from "./ClassList";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ClassList />
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});