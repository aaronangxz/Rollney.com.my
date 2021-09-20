import React, { Component } from "react";
import Intro from "./components/intro";
import SliderOne from "./components/sliderOne";
import SliderTwo from "./components/sliderTwo";
import About from "./components/about";
import Menu from "./components/menu";
import Outlets from "./components/outlets";
import Apply from "../Opportunity/components/apply";

class home extends Component {
  render() {
    return (
      <div className="home-container">
        <Intro></Intro>
        <SliderOne></SliderOne>
        <SliderTwo></SliderTwo>
        <About></About>
        <div className="rel-h">
          <Menu></Menu>
          <Outlets></Outlets>
        </div>
        <Apply></Apply>
      </div>
    );
  }
}

export default home;
