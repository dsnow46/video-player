import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import {BrowserRouter as Router} from "react-router-dom";
import "./index.css";
import "./navbar.css";
import "./home.css";


ReactDOM.render(<Router><App/></Router>, document.getElementById("root"));