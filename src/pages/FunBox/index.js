import React, { Component } from "react";
import Banner from "./components/banner";
import Intro from "./components/intro";
class FunBox extends Component {
  render() {
    return (
      <div className="fun-box-container">
        {/* <div class="elfsight-app-55c3f3d3-e63d-4eff-aa23-ad7eefe9a385"></div> */}
        <Banner></Banner>
        <Intro></Intro>
      </div>
    );
  }
}

export default FunBox;
