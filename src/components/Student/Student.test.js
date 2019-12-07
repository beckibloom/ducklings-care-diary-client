import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Student from "./Student";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Student />
    </BrowserRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div); 
});