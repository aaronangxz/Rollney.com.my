import React, { Component } from "react";
import Banner from "./components/banner";
import EventsList from "./components/eventslist";

class events extends Component {
  render() {
    return (
      <div className="events-container">
        <Banner></Banner>
        <EventsList></EventsList>
      </div>
    );
  }
}

export default events;
