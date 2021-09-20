import React, { Component } from "react";
import Banner from "./components/banner";
import Intro from "./components/intro";
import Journey from "./components/journey";

class about extends Component {
  render() {
    return (
      <div className="about-container">
        <Banner></Banner>
        <div className="about-wrapper">
          <Intro></Intro>
          <Journey></Journey>
        </div>
      </div>
    );
  }
}

export default about;
