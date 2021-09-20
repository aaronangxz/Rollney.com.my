import React, { Component } from "react";
import Banner from "./components/banner";
import Apply from "./components/apply";
class Opportunity extends Component {
  render() {
    return (
      <div className="opp-container">
        <Banner></Banner>
        <Apply></Apply>
      </div>
    );
  }
}

export default Opportunity;
