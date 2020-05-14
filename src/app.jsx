import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./module.scss";

import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    console.debug("I am React App Component");
  }

  render() {
    // return <div className="color-red">RED</div>;
    return <Header />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
