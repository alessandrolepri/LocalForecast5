import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./module.scss";

import Header from "./components/Header";
import WeekDays from './components/WeekDays';

class App extends Component {
  constructor(props) {
    super(props);
    // console.debug("I am React App Component");
  }

  render() {
    
    return (
        <React.Fragment>
          <Header />
          <WeekDays />
        </React.Fragment>
    )

  }
}

ReactDOM.render(<App />, document.getElementById("root"));
