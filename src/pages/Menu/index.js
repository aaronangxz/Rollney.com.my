import React, { Component } from "react";
import Banner from "./components/banner";
import Intro from "./components/intro";
import SeriesList from "./components/serieslist";
class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <Banner></Banner>
        <Intro></Intro>
        <div className="menu-wrapper">
          <SeriesList></SeriesList>
        </div>
      </div>
    );
  }
}

export default Menu;
