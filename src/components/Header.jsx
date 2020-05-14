import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="header">
        <div className="current-location color-red">London</div>
        <div className="time">00:00 GMT</div>
        <div className="current-temp">23</div>
        <div className="reloading">Reloading</div>
        <div className="count-bar">seconds</div>
      </section>
    );
  }
}

export default Header;
