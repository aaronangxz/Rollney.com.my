import React, { Component } from "react";
import Banner from "./components/banner";
import RollneyForm from "./components/rollneyform";
class contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <Banner></Banner>
        <RollneyForm></RollneyForm>
      </div>
    );
  }
}

export default contact;
