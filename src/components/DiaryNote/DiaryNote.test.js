import React from "react";
import ReactDOM from "react-dom";
import DiaryNote from "./DiaryNote";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DiaryNote />, div);
  ReactDOM.unmountComponentAtNode(div); 
});