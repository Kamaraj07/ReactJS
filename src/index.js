import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Employ from "./component/comp";
import Class from "./component/comp2";

ReactDOM.render(<Employ />, document.getElementById("root"));
ReactDOM.render(<Class />, document.getElementById("pop"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
