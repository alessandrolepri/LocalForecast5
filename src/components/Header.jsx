import React from "react";

import CurrentLocation from './currentLocation'
import Time from './Time';
import Temperature from './Temperature';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="header">
        <CurrentLocation />
        <Time />
        <Temperature /> 
      </section>
    );
  }
}

export default Header;
