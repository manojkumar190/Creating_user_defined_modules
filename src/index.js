import React from "react";
import ReactDOM from "react-dom";
import { add, multiply, subtract, divide } from "./calculator";
//import * as calculator from "./app"

//calculator.add(1,2) we should use
ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
